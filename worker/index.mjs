import {admin} from './admin.mjs';
import {json,submitQuote,retryNotifications} from './quotes.mjs';
import {recordClick} from './metrics.mjs';

import {publicOrigin} from '../src/public-origin.mjs';

export async function renderPublic(request,env,preview=false) {
  const url=new URL(request.url);
  if (url.pathname==='/') return Response.redirect(new URL('/ms/',url),302);
  const original=await env.ASSETS.fetch(request);
  const type=original.headers.get('content-type')||'';
  if (!original.ok || request.method==='HEAD') return original;
  const html=type.includes('text/html');
  if (!html && !['/robots.txt','/sitemap.xml'].includes(url.pathname)) return original;
  const productionOrigin=env.SITE_URL?new URL(env.SITE_URL).origin:
    (url.hostname==='busra.mail-82f.workers.dev' ? url.origin : publicOrigin);
  const document=(await original.text()).replaceAll(publicOrigin,productionOrigin);
  const headers=new Headers(original.headers);
  for (const key of ['etag','last-modified','content-length','content-encoding']) headers.delete(key);
  headers.set('referrer-policy','strict-origin-when-cross-origin');
  headers.set('x-content-type-options','nosniff');
  headers.set('cache-control','no-cache');
  let response=new Response(document,{status:original.status,headers});
  if (!html || !env.DB) return response;
  let edits;
  try {
    edits=await env.DB.prepare('SELECT field,'+(preview?'draft':'published')+' AS value FROM page_edits WHERE path=? AND '+(preview?'draft':'published')+' IS NOT NULL').bind(url.pathname).all();
  } catch {
    // The compiled site remains available during first provisioning and D1 outages.
    return response;
  }
  if (!edits.results.length) return response;
  const rewriter=new HTMLRewriter();
  for (const {field,value} of edits.results) {
    if (field==='title' || field==='description') rewriter.on('meta[property="og:'+field+'"]',{element(el){el.setAttribute('content',value)}});
    if (field==='description') rewriter.on('meta[name="description"]',{element(el){el.setAttribute('content',value)}});
    else {
      if (!/^[a-z][a-z0-9-]{0,60}$/.test(field)) continue;
      const selector=field==='heading'?'h1':field==='title'?'title':'[data-edit="'+field+'"]';
      rewriter.on(selector,{element(el){el.setInnerContent(value)}});
    }
  }
  return rewriter.transform(response);
}

export default {
  async fetch(request,env,ctx) {
    const path=new URL(request.url).pathname;
    try {
      if (path==='/api/quotes' || path==='/api/quotes/') return await submitQuote(request,env,ctx);
      if (path==='/api/contact-click') return await recordClick(request,env);
      if (path.startsWith('/api/')) return json({error:'not_found'},404);
      if (path==='/admin' || path.startsWith('/admin/')) return await admin(request,env,renderPublic);
      return await renderPublic(request,env);
    } catch {
      console.error('BUSRA request could not be completed');
      return path.startsWith('/api/') ? json({error:'unavailable'},503) : new Response('Service temporarily unavailable',{status:503,headers:{'cache-control':'no-store'}});
    }
  },
  scheduled(event,env,ctx) { ctx.waitUntil(retryNotifications(env)); }
};


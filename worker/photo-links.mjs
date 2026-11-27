const prefix = 'shared-photo/';
const lifetime = 7 * 24 * 60 * 60;
const mime = { jpg:'image/jpeg', png:'image/png', webp:'image/webp' };
const namePattern = /^(\d{10})-([a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12})\.(jpg|png|webp)$/;

export function sharedPhotoKey(type) {
  const expires = Math.floor(Date.now()/1000) + lifetime;
  return prefix + expires + '-' + crypto.randomUUID() + '.' + type;
}

export function photoPaths(keys) {
  return keys.filter(key => key.startsWith(prefix)).map(key => '/api/photos/' + key.slice(prefix.length));
}

export async function openPhoto(request,env,name) {
  const headers = {
    'Cache-Control':'private, no-store', 'X-Robots-Tag':'noindex, nofollow, noarchive',
    'X-Content-Type-Options':'nosniff', 'Content-Security-Policy':"default-src 'none'; sandbox",
    'Referrer-Policy':'no-referrer'
  };
  if (!['GET','HEAD'].includes(request.method)) {
    return new Response(null,{status:405,headers:{...headers,Allow:'GET, HEAD'}});
  }
  const parsed = namePattern.exec(name);
  if (!parsed || Number(parsed[1]) <= Date.now()/1000) {
    return new Response(null,{status:404,headers});
  }
  const image = await env.PHOTOS.get(prefix + name,'stream');
  if (!image) return new Response(null,{status:404,headers});
  headers['Content-Type'] = mime[parsed[3]];
  headers['Content-Disposition'] = 'inline; filename="project-photo.' + parsed[3] + '"';
  return new Response(request.method==='HEAD'?null:image,{headers});
}

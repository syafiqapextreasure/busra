CREATE TABLE quotes (
  reference TEXT PRIMARY KEY,
  request_id TEXT NOT NULL UNIQUE,
  created TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status TEXT NOT NULL DEFAULT 'New' CHECK (status IN ('New','Contacted','Quoted','Won','Closed')),
  payload TEXT NOT NULL,
  files TEXT NOT NULL,
  notified INTEGER NOT NULL DEFAULT 0,
  lease_until INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX quotes_pending ON quotes(notified, lease_until);
CREATE INDEX quotes_created ON quotes(created DESC);
CREATE TABLE page_edits (
  path TEXT NOT NULL,
  field TEXT NOT NULL,
  draft TEXT NOT NULL,
  published TEXT,
  PRIMARY KEY (path,field)
);

CREATE TABLE daily_metrics (
  day TEXT NOT NULL,
  event TEXT NOT NULL CHECK (event IN ('phone','whatsapp','quote')),
  lang TEXT NOT NULL CHECK (lang IN ('ms','en')),
  total INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (day,event,lang)
);

CREATE TRIGGER count_accepted_quote AFTER INSERT ON quotes
BEGIN
  INSERT INTO daily_metrics(day,event,lang,total)
  VALUES(date('now','+8 hours'),'quote',CASE WHEN json_extract(NEW.payload,'$.lang')='en' THEN 'en' ELSE 'ms' END,1)
  ON CONFLICT(day,event,lang) DO UPDATE SET total=total+1;
END;


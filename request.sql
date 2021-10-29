-- Sandbox: https://www.db-fiddle.com/f/xqPbSgHM7fhtx4xi4c95Sm/2

SELECT date(d1.created_at), d1.user_id, d3.value as first_value, d4.value as last_value
FROM DATA d1

JOIN (
  SELECT MIN(d2.created_at) as min_date, MAX(d2.created_at) as max_date, d2.user_id
  FROM DATA d2
  GROUP BY date(d2.created_at), d2.user_id
) d2 ON date(d2.min_date) = date(d1.created_at) AND date(d2.max_date) = date(d1.created_at) AND d1.user_id = d2.user_id

LEFT JOIN (
  SELECT d3.value, d3.created_at
  FROM DATA d3
) d3 ON d3.created_at = d2.min_date

LEFT JOIN (
  SELECT d4.value, d4.created_at
  FROM DATA d4
) d4 ON d4.created_at = d2.max_date

GROUP BY Date(d1.created_at), d1.user_id, d3.value, d4.value

SELECT 
    district, COUNT(*)
FROM
    sakila.address
GROUP BY district
ORDER BY COUNT(*) DESC;

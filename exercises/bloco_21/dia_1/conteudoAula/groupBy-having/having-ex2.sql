SELECT 
    rating, SUM(replacement_cost) AS 'replacement'
FROM
    sakila.film
GROUP BY rating
HAVING replacement > 3950.50
ORDER BY replacement;

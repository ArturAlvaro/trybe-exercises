SELECT rating, AVG(length) AS 'Length'
FROM sakila.film
GROUP BY rating
HAVING Length BETWEEN (115.0) AND (121.50)
ORDER BY Length DESC;

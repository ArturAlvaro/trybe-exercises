SELECT 
    c.first_name, COUNT(a.address) AS quantidade_endereço
FROM
    sakila.address AS a
        INNER JOIN
    sakila.customer AS c ON a.address_id = c.address_id
WHERE
    c.active = 1
GROUP BY c.first_name
ORDER BY c.first_name DESC;

SELECT 
    c.customer_id,
    c.first_name,
    c.email,
    a.address,
    a.address_id
FROM
    sakila.customer AS c
        INNER JOIN
    sakila.address AS a ON a.address_id = c.address_id
ORDER BY first_name DESC
LIMIT 100;

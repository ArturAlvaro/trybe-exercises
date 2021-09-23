SELECT 
    c.first_name, c.email, c.address_id, a.address, a.district
FROM
    sakila.address AS a
        INNER JOIN
    sakila.customer AS c ON a.address_id = c.address_id
WHERE
    a.district = 'California'
        AND c.first_name LIKE '%rene%';

SELECT 
    first_name, last_name, a.address
FROM
    sakila.staff AS s
        INNER JOIN
    sakila.address AS a ON a.address_id = s.address_id;

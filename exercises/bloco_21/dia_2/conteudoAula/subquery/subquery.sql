SELECT f.title, f.rating
FROM (
    SELECT *
    FROM sakila.film
    WHERE rating = 'R'
) AS f;

SELECT 
    address,
    district,
    (SELECT 
            city
        FROM
            sakila.city
        WHERE
            city.city_id = sakila.address.city_id) AS city
FROM
    sakila.address;

SELECT
    first_name,
    (
        SELECT address
        FROM sakila.address
        WHERE address.address_id = tabela_externa.address_id
    ) AS address
FROM sakila.customer AS tabela_externa;

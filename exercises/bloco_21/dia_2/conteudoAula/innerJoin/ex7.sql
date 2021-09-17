SELECT 
    act.actor_id, act.first_name, f.film_id, f.title
FROM
    sakila.actor AS act
        INNER JOIN
    sakila.film_actor AS fa ON fa.actor_id = act.actor_id
        INNER JOIN
    sakila.film AS f ON f.film_id = fa.film_id;

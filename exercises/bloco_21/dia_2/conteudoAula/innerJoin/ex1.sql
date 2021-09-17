SELECT 
    act.actor_id, act.first_name, fil.film_id
FROM
    sakila.actor AS act
        INNER JOIN
    sakila.film_actor AS fil ON act.actor_id = fil.actor_id;

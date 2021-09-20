USE sakila;
DELIMITER $$

CREATE PROCEDURE showTenMostPopularActors()
BEGIN
	SELECT actor_id actor, count(film_id) num_of_movies from sakila.film_actor
	GROUP BY actor_id
	ORDER BY num_of_movies desc
	LIMIT 10;
END $$
DELIMITER ;

CALL showTenMostPopularActors();
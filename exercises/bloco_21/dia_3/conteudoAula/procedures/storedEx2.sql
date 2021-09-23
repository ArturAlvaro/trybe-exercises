select * from sakila.inventory;
select * from sakila.film;

USE sakila;
DELIMITER $$

CREATE FUNCTION findMovieTitle(id INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN
	DECLARE movie_name VARCHAR(100);
    SELECT DISTINCT t1.title FROM sakila.film t1
    INNER JOIN sakila.inventory t2
    ON t1.film_id = t2.film_id
    WHERE t2.inventory_id = id
    INTO movie_name;
    RETURN movie_name;
END $$

DELIMITER ;

-- como usar

SELECT findMovieTitle(3);

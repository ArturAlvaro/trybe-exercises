USE sakila;
DELIMITER $$

CREATE FUNCTION showTotalMoviesFromCategory(movie_category VARCHAR (100))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE result INT;
    SELECT COUNT(*) FROM sakila.film_category t1
    INNER JOIN sakila.category t2
    ON t2.category_id = t1.category_id
    WHERE t2.name = movie_category
    INTO result;
    RETURN result;
END $$

DELIMITER ;

-- como usar
SELECT showTotalMoviesFromCategory('Action');

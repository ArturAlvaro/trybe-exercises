USE sakila;
DELIMITER $$
-- id filme, title, id categoria, nome categoria
CREATE PROCEDURE showFilmInfo(IN actCategory VARCHAR(100))
BEGIN
	SELECT t1.category_id, t2.film_id, t3.title, t1.name FROM sakila.category t1
    INNER JOIN sakila.film_category t2
    ON t1.category_id = t2.category_id
    INNER JOIN sakila.film t3
    ON t3.film_id = t2.film_id
    WHERE t1.name = actCategory;
END $$
DELIMITER ;

CALL showFilmInfo('Drama');

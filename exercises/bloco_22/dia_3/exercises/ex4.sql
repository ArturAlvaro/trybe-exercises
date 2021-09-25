CREATE VIEW movies_languages AS
    SELECT f.title, l.language_id, l.name
    FROM sakila.film f
	INNER JOIN sakila.language l ON f.language_id = l.language_id;
    
SELECT * FROM movies_languages;

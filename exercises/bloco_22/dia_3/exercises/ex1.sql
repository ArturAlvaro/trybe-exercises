CREATE VIEW film_with_categories AS
	SELECT f.title, fc.category_id, c.name
	FROM sakila.film_category fc
	INNER JOIN sakila.film f ON f.film_id = fc.film_id
	INNER JOIN sakila.category c ON c.category_id = fc.category_id
	ORDER BY f.title;
    
SELECT * FROM film_with_categories;

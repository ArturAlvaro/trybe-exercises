-- soma da duração dos filmes
SELECT 
    SUM(length) AS 'Tempo de Exibição Total'
FROM
    sakila.film;

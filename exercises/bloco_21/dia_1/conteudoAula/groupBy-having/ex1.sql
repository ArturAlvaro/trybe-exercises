-- quantidade de clientes cadastrados ativos e inativos
SELECT 
    active, COUNT(active)
FROM
    sakila.customer
GROUP BY active;

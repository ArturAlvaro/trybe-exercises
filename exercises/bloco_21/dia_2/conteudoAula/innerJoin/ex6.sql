SELECT 
    s.first_name, s.last_name, AVG(p.amount) AS `average_value`
FROM
    sakila.payment AS p
        INNER JOIN
    sakila.staff AS s ON p.staff_id = s.staff_id
WHERE
    YEAR(p.payment_date) = '2006'
GROUP BY s.first_name , s.last_name;

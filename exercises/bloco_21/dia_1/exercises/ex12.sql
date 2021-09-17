SELECT 
    first_name, CHAR_LENGTH(first_name) AS `name_length`
FROM
    hr.employees
GROUP BY FIRST_NAME
HAVING `name_length` >= 8;

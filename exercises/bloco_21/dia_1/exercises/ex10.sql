SELECT 
    DEPARTMENT_ID,
    COUNT(*) AS `num_of_employees`,
    AVG(salary) AS `average_salary`
FROM
    hr.employees
GROUP BY DEPARTMENT_ID
HAVING num_of_employees > 10;

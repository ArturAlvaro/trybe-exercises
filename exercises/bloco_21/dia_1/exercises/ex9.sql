SELECT 
    JOB_ID, AVG(salary) AS `average_salary`
FROM
    hr.employees
WHERE
    JOB_ID <> 'IT_PROG'
GROUP BY JOB_ID
ORDER BY average_salary DESC;

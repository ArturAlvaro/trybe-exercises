SELECT 
    AVG(salary) AS 'media'
FROM
    hr.employees
GROUP BY JOB_ID
ORDER BY media DESC;

select * from hr.employees;

SELECT 
    JOB_ID, SUM(salary)
FROM
    hr.employees
WHERE JOB_ID = 'IT_PROG'
GROUP BY JOB_ID;

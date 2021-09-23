SELECT 
    JOB_ID, COUNT(*)
FROM
    hr.employees
WHERE
    JOB_ID LIKE '%IT_PROG%';

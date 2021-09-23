SELECT 
    last_name, SUBSTRING(hire_date, 1, 7) 'hire'
FROM
    hr.employees
HAVING hire = '1987-07';

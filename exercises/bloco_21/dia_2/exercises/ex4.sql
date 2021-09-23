SELECT 
    *
FROM
    Pixar.Theater t1
        LEFT JOIN
    Pixar.Movies t2 ON t1.id = t2.id
ORDER BY t1.name;

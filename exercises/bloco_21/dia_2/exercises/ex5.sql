SELECT 
    *
FROM
    Pixar.Movies AS t1
        RIGHT JOIN
    Pixar.Theater AS t2 ON t2.id = t1.id
ORDER BY t2.name;

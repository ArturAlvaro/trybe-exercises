-- subquery
SELECT 
    rating
FROM
    BoxOffice
WHERE
    movie_id IN (SELECT 
            id
        FROM
            Movies
        WHERE
            year > 2009);

-- inner join

SELECT 
    b.rating
FROM
    BoxOffice b
        INNER JOIN
    Movies m ON b.movie_id = m.id
WHERE
    m.year > 2009;

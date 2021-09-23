SELECT 
    t1.title, t2.domestic_sales, t2.international_sales
FROM
    Pixar.Movies AS t1
        INNER JOIN
    Pixar.BoxOffice AS t2 ON t1.id = t2.movie_id
WHERE
    t2.international_sales > t2.domestic_sales;

SELECT 
    Id, Title
FROM
    hotel.Books AS boo
WHERE
    EXISTS( SELECT 
            returned
        FROM
            hotel.Books_Lent AS lent
        WHERE
            boo.Id = lent.book_id
                AND boo.Title LIKE '%lost%');

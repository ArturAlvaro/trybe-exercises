SELECT 
    Id, Title
FROM
    hotel.Books AS boo
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            hotel.Books_Lent AS lent
        WHERE
            boo.Id = lent.book_id);

USE sakila;
DELIMITER $$

CREATE PROCEDURE activeOrNot(
	IN checkEmail VARCHAR(100),
    OUT isActive BOOL
    )
BEGIN
	SELECT active INTO isActive
    FROM sakila.staff
    WHERE email = checkEmail;
END $$
DELIMITER ;

SELECT @check;
CALL activeOrNot('MARY.SMITH@sakilacustomer.org', @check);
SELECT @check;

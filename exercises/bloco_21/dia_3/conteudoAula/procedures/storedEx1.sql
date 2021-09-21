USE sakila;
DELIMITER $$

CREATE FUNCTION showPayment(id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE counting INT;
	SELECT COUNT(payment_id)
    FROM sakila.payment
	WHERE
    customer_id = id
	GROUP BY customer_id INTO counting;
    RETURN counting;
END $$

DELIMITER ;

-- como usar

SELECT showPayment(1);

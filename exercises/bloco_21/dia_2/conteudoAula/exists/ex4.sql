SELECT 
    car.Name, cust.Name
FROM
    hotel.Cars AS car
        INNER JOIN
    hotel.Customers AS cust
WHERE
    EXISTS( SELECT 
            CustomerID
        FROM
            hotel.CarSales
        WHERE
            CustomerID = cust.CustomerId
                AND cust.CustomerId = car.Id);

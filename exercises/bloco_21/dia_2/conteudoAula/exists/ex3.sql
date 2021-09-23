SELECT 
    Name
FROM
    hotel.Customers AS cust
WHERE
    NOT EXISTS( SELECT 
            CustomerId
        FROM
            hotel.CarSales
        WHERE
            cust.CustomerID = hotel.CarSales.CustomerID);

-- mude o nome da coluna street_address para address sem alterar o tipo
SHOW COLUMNS FROM hr.locations;
ALTER TABLE locations CHANGE COLUMN STREET_ADDRESS ADDRESS VARCHAR(40);

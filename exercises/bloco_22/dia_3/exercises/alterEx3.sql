-- altere country_name para country sem alterar o tipo e tamanho dos dados

SHOW COLUMNS FROM hr.countries;
ALTER TABLE hr.countries CHANGE COLUMN COUNTRY_NAME COUNTRY VARCHAR(40);

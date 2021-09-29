-- altere region_name para region sem alterar o tipo e tamanho dos dados

SHOW COLUMNS FROM hr.regions;
ALTER TABLE hr.regions CHANGE COLUMN REGION_NAME REGION VARCHAR(25);

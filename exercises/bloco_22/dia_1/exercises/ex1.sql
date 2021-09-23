CREATE SCHEMA IF NOT EXISTS Zoologico;
USE Zoologico;

CREATE TABLE `Animais`(
	`Nome_Id` INT AUTO_INCREMENT NOT NULL,
    `Nome` VARCHAR(20) NOT NULL,
    `Especie` VARCHAR(100) NOT NULL,
    `Sexo` VARCHAR(1) NOT NULL,
    `Idade` INT NOT NULL,
    `Localizacao` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`Nome_Id`)
);

CREATE TABLE `Gerente`(
	`Gerente_Id` INT AUTO_INCREMENT NOT NULL,
    `Gerente_Nome` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`Gerente_Id`)
);

CREATE TABLE `Cuidador`(
	`Cuidador_Id` INT AUTO_INCREMENT NOT NULL,
    `Cuidador_nome` VARCHAR(100) NOT NULL,
    `Gerente_Id` INT NOT NULL,
    PRIMARY KEY (`Cuidador_Id`),
    FOREIGN KEY (`Gerente_Id`) REFERENCES `Gerente` (`Gerente_Id`)
);

CREATE TABLE `Cuidador_animal`(
	`Cuidador_Id` INT,
    `Nome_id`INT,
    CONSTRAINT PRIMARY KEY (`Cuidador_Id`, `Nome_Id`),
    FOREIGN KEY (`Cuidador_Id`) REFERENCES `Cuidador` (`Cuidador_Id`),
    FOREIGN KEY (`Nome_Id`) REFERENCES `Animais` (`Nome_Id`)
);

CREATE SCHEMA IF NOT EXISTS normalization;
USE normalization;

CREATE TABLE funcionario(
	funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    dataCadastro VARCHAR(100)
);

INSERT INTO funcionario (funcionario_id, nome, sobrenome, email, telefone, dataCadastro)
VALUES
	(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
    (13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
    (14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
    (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

CREATE TABLE setor(
	setor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    setor VARCHAR(100) NOT NULL
);

INSERT INTO setor (setor_id, setor)
VALUES
	(1, 'Administração'),
    (2, 'Operacional'),
    (3, 'Estratégico'),
    (4, 'Marketing'),
    (5, 'Vendas');

CREATE TABLE funcionario_setor(
	funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    FOREIGN KEY (funcionario_id) REFERENCES funcionario (funcionario_id),
    FOREIGN KEY (setor_id) REFERENCES setor (setor_id)
);

INSERT INTO funcionario_setor (funcionario_id, setor_id)
VALUES
	(12, 1),
    (12, 5),
    (13, 2),
    (14, 3),
    (14, 5),
    (15, 5);

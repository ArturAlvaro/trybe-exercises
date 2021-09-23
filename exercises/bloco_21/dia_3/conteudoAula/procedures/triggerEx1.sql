-- trigger insert
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER insert_carro
	BEFORE INSERT ON carros
    FOR EACH ROW
    BEGIN
		SET NEW.data_atualizacao = NOW();
        SET NEW.acao = 'INSERÇÃO';
        SET NEW.disponivel_em_estoque = 1;
    END $$
DELIMITER ;

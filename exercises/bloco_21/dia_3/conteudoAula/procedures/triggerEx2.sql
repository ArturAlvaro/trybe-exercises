USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER update_carros
	BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW();
	SET NEW.acao = 'ATUALIZAÇÃO';
END $$

DELIMITER ;

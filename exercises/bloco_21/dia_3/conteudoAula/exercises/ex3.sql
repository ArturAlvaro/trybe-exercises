USE BeeMovies;
DELIMITER $$

CREATE TRIGGER delete_movies
	BEFORE DELETE ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(log_date, executed_action, movie_id)
    VALUES (NOW(), 'DELETE', OLD.movie_id);
END $$

DELIMITER ;

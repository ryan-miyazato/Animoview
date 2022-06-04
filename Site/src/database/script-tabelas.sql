CREATE USER 'animoview_client'@'localhost' IDENTIFIED BY 'sptech';
GRANT SELECT, UPDATE, INSERT, DELETE, EXECUTE, SHOW VIEW ON Animoview.* TO 'animoview_client'@'localhost';

CREATE DATABASE animoview;

USE animoview;

CREATE TABLE Usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
Nome VARCHAR(45),
Apelido VARCHAR(30) UNIQUE,
Email VARCHAR(45) UNIQUE,
Senha VARCHAR(45) NOT NULL
);

CREATE TABLE Anime (
idAnime INT PRIMARY KEY AUTO_INCREMENT,
nomeAnime VARCHAR(45),
nomeJapAnime VARCHAR(45),
sinopse TEXT,
categoria VARCHAR(45),
gênero VARCHAR(45),
estudio VARCHAR(45),
episodios INT,
imagemAnime varchar(45)
) AUTO_INCREMENT = 100;

CREATE TABLE AnimeUsuario (
fkAnime INT,
nota INT, 
statusAnime VARCHAR(45) 
check (statusAnime = 'Assistindo' or statusAnime = 'Completo' or statusAnime = 'Dropado' or statusAnime = 'Planejo Ver'),
epsAssistidos INT,
fkUsuario INT, 
PRIMARY KEY(fkAnime, fkUsuario),
FOREIGN KEY(fkAnime) REFERENCES Anime(idAnime),
FOREIGN KEY(fkUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE Postagem (
fkUsuario INT,
FOREIGN KEY(fkUsuario) REFERENCES Usuario(idUsuario),
idPost INT,
tituloPost VARCHAR(45),
textoPost VARCHAR(300),
likes INT, 
dislikes INT,
fkAnime INT,
FOREIGN KEY(fkAnime) REFERENCES Anime(idAnime),
PRIMARY KEY(fkUsuario, idPost, fkAnime)
);

INSERT INTO Anime(nomeAnime, episodios) VALUES 
('Anime bom', 13),
('Anime ruim', 13),
('Anime legal', 24),
('Anime dois', 11);
INSERT INTO Usuario VALUES (1, 'Amelia', '@ame-watson', 'ame-watson@animoview.com', 'groundpound');
INSERT INTO Usuario VALUES (null, 'Ryan', '@ryan', 'ryan@gmail.com', '123');

INSERT INTO animeusuario VALUES
(100, 9, 'Completo', 13, 1),
(101, 3, 'Dropado', 2, 1),
(102, 7, 'Completo', 24, 1),
(103, 5, 'Assistindo', 8, 1);

SELECT * FROM usuario;
SELECT * FROM anime;
SELECT * FROM animeusuario;

desc animeusuario;
desc anime;
desc animeusuario;



SELECT idAnime, nomeAnime, episodios, nota, statusAnime, epsAssistidos 
        FROM Anime 
        JOIN AnimeUsuario ON fkAnime = idAnime
        WHERE fkUsuario = '1'
        GROUP BY statusAnime
        ORDER BY nomeAnime
        LIMIT 30;
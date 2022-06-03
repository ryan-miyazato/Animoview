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
sinopse VARCHAR(500),
categoria VARCHAR(45),
gênero VARCHAR(45),
estudio VARCHAR(45),
episodios INT
) AUTO_INCREMENT = 100;

CREATE TABLE AnimeUsuario (
fkAnime INT,
nota INT, 
statusAnime VARCHAR(45) 
check (statusAnime = 'Assistindo' or statusAnime = 'Completo' or statusAnime = 'Dropado'),
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

INSERT INTO Usuario VALUES (1, 'Amelia', '@ame-watson', 'ame-watson@animoview.com', 'groundpound');
INSERT INTO Usuario VALUES (null, 'Ryan', '@ryan', 'ryan@gmail.com', '123');

SELECT * FROM usuario;
desc animeusuario;
desc anime;


SELECT idAnime, nomeAnime, episodios, nota, statusAnime, epsAssistidos 
FROM Anime 
JOIN AnimeUsuario ON fkAnime = idAnime
WHERE fkUsuario = '3';

INSERT INTO Anime(nomeAnime, episodios) VALUES 
('Anime bom', 13),
('Anime ruim', 13),
('Anime legal', 24),
('Anime dois', 11);

select * from anime;







-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */

CREATE USER 'animoview_client'@'localhost' IDENTIFIED BY 'sptech';
GRANT SELECT, UPDATE, INSERT, DELETE, EXECUTE, SHOW VIEW ON Animoview.* TO 'animoview_client'@'localhost';

CREATE DATABASE animoview;

USE animoview;

CREATE TABLE Usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
Apelido VARCHAR(45),
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

INSERT INTO Usuario VALUES (null, 'Ryan', 'ryan@gmail.com', '123');

SELECT * FROM usuario;



/* para sql server - remoto - produção */
CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY IDENTITY(1,1),
	descricao VARCHAR(300)
);

/* altere esta tabela de acordo com o que está em INSERT de sua API do arduino */

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT FOREIGN KEY REFERENCES aquario(id)
);

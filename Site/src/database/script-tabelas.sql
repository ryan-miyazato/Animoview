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
nomeAnime TINYTEXT,
nomeSinonimo TINYTEXT,
nomeJapAnime TINYTEXT,
tipo varchar(30) check (tipo = 'TV' or tipo = 'Filme' or tipo = 'ONA' or tipo = 'OVA' or tipo = 'Especial' or tipo = 'Música'),
categoria VARCHAR(120),
genero VARCHAR(120),
estudio VARCHAR(120),
episodios INT,
duracao VARCHAR(30),
imagemAnime varchar(120)
) AUTO_INCREMENT = 100;

CREATE TABLE AnimeUsuario (
fkAnime INT,
dataLista DATETIME,
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
textoPost TINYTEXT,
likes INT, 
dislikes INT,
fkAnime INT,
FOREIGN KEY(fkAnime) REFERENCES Anime(idAnime),
PRIMARY KEY(fkUsuario, idPost, fkAnime)
);

-- INSERTS
INSERT INTO Usuario VALUES 
(1, 'Amelia', '@ame-watson', 'ame-watson@animoview.com', 'groundpound'),
(null, 'Ryan', '@ryan', 'ryan@gmail.com', '123');

INSERT INTO Anime VALUES 
(null, 
'Neon Genesis Evangelion: The End of Evangelion',
'Neon Genesis Evangelion: The End of Evangelion',
'新世紀エヴァンゲリオン劇場版 THE END OF EVANGELION',
'Filme',
'Mecha, Psicológico',
'Drama, Sci-Fi, Vanguarda',
'Gainax, Production I.G',
1,
'1 hr. 26 min.',
'the-end-of-evangelion1-1.jpg'
),
(null, 
'Kimetsu no Yaiba: Yuukaku-hen',
 'Demon Slayer: Kimetsu no Yaiba Entertainment District Arc',
 '鬼滅の刃 遊郭編',
'TV',
'Shounen, Historical',
'Ação, Fantasia',
'ufotable',
11,
'26 min. por ep.',
'kimetsu-no-yaiba-season2-1.jpg'
),
(null, 
'Spy x Family',
'Spy x Family',
 'SPY×FAMILY',
'TV',
'Shounen',
'Ação, Comédia',
'Wit Studio, CloverWorks',
12,
'24 min. por ep.',
'spy-x-family-season1-1.jpg'
),
(null, 
'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen',
'Kaguya-sama: Love is War',
 'かぐや様は告らせたい～天才たちの恋愛頭脳戦～',
'TV',
'Seinen, Psicológico, Contexto Romantico, Escolar',
'Comédia',
'A-1 Pictures',
12,
'25 min. por ep.',
'Kaguya-sama-season1-1.jpg'
),
(null, 
'Tokyo Ghoul √A',
'Tokyo Ghoul Root A',
 '東京喰種√A',
'TV',
'Seinen, Psicológico, Gore',
'Ação, Fantasia, Terror',
'Studio Pierrot',
12,
'24 min. por ep.',
'tokyo-ghoul-rootA-1.jpg'
),
(null, 
'Black Clover',
'Black Clover',
 'ブラッククローバー',
'TV',
'Shounen',
'Ação, Comédia, Fantasia',
'Studio Pierrot',
170,
'23 min. por ep.',
'black-clover1-1.jpg'
),
(null, 
'Tate no Yuusha no Nariagari Season 2',
'The Rising of the Shield Hero Season 2',
 '盾の勇者の成り上がり Season2',
'TV',
'Isekai',
'Action, Adventure, Drama, Fantasy',
'Kinema Citrus, DR Movie',
12,
'23 min. por ep.',
'tate-no-yuusha-season2-1.jpg'
),
(null, 
'Kaguya-sama wa Kokurasetai? Tensai-tachi no Renai Zunousen',
'Kaguya-sama: Love is War Season 2',
 ' かぐや様は告らせたい？～天才たちの恋愛頭脳戦～',
'TV',
'Seinen, Psicológico, Contexto Romantico, Escolar',
'Comédia',
'A-1 Pictures',
12,
'24 min. por ep.',
'kaguya-sama-season2-1.jpg'
),
(null, 
'Kaguya-sama wa Kokurasetai: Ultra Romantic',
'Kaguya-sama: Love is War - Ultra Romantic',
 'かぐや様は告らせたい-ウルトラロマンティック-',
'TV',
'Seinen, Psicológico, Contexto Romantico, Escolar',
'Comédia, Suspense',
'A-1 Pictures',
12,
'23 min. por ep.',
'kaguya-sama-ultra-romantic-1.jpg'
),
(null, 
'Kawaii dake ja Nai Shikimori-san',
'Shikimori''s Not Just a Cutie',
 '可愛いだけじゃない式守さん',
'TV',
'Escola',
'Comédia, Romance',
'Doga Kobo',
12,
'23 min. por ep.',
'kawaii-sake-ja-nai-shikimori-san-1.jpg'
),
(null, 
'Summertime Render',
'Summer Time Rendering',
 'サマータイムレンダ',
'TV',
'Shounen',
'Mistério, Sobrenatural, Suspense',
'OLM',
25,
'23 min. por ep.',
'summertime-render-1.jpg'
),
(null, 
'Koi wa Sekai Seifuku no Ato de',
'Love After World Domination',
'恋は世界征服のあとで',
'TV',
'Shounen',
'Comédia, Romance',
'Project No.9',
12,
'23 min. por ep.',
'koi-wa-sekai-seifuku-no-ato-de-1.jpg'
),
(null, 
'Fullmetal Alchemist: Brotherhood',
'Hagane no Renkinjutsushi: Fullmetal Alchemist',
 '鋼の錬金術師 FULLMETAL ALCHEMIST',
'TV',
'Shounen, Militar',
'Ação, Aventura, Drama, Fantasia',
'Bones',
64,
'24 min. por ep.',
'fullmetal-alchemist-brotherhood-1.jpg'
),
(null, 
'Mahou Shoujo Madoka★Magica',
'Puella Magi Madoka Magica',
'魔法少女まどか★マギカ',
'TV',
'Mahou Shoujo, Psicológico',
'Drama, Suspense',
'Shaft',
12,
'24 min. por ep.',
'mahou-shoujo-madoka-magica-1.jpg'
),
(null, 
'Death Parade',
'Death Parade',
'デス・パレード',
'TV',
'Adulto, Jogos de Alto Risco, Psicológico',
'Drama, Sobrenatural, Suspense',
'Madhouse',
12,
'23 min. por ep.',
'death-parade-1.jpg'
),
(null, 
'Kimi no Na wa.',
'Your Name.',
'君の名は。',
'Filme',
'Contexto Romantico',
'Drama, Sobrenatural',
'CoMix Wave Films',
1,
'1 hr. 46 min.',
'kimi-no-na-wa-1.jpg'
),
(null, 
'Clannad',
'Clannad',
'CLANNAD',
'TV',
'Escola',
'Drama, Romance, Sobrenatural',
'Kyoto Animation',
23,
'24 min. por ep.',
'clannad-1.jpg'
),
(null, 
'Clannad: Mou Hitotsu no Sekai, Tomoyo-hen',
'Clannad: Another World, Tomoyo Chapter',
'-クラナド-　もうひとつの世界　智代編',
'Especial',
'Escola',
'Drama, Romance',
'Kyoto Animation',
1,
'25 min.',
'clannad-mou-hitotsu-no-sekai-tomoyo-hen-1.jpg'
),
(null, 
'Clannad: After Story',
'Clannad ~After Story~',
'CLANNAD〜AFTER STORY〜 クラナド アフターストーリー',
'TV',
'Família',
'Drama, Romance, Sobrenatural',
'Kyoto Animation',
24,
'24 min. por ep.',
'clannad-after-story-1.jpg'
),
(null, 
'Neon Genesis Evangelion',
'Shinseiki Evangelion',
' 新世紀エヴァンゲリオン',
'TV',
'Mecha, Psicológico',
'Ação, Drama, Sci-Fi, Vanguarda',
'Gainax, Tatsunoko Production',
26,
'24 min. por ep.',
'neon-genesis-evangelion-1.jpg'
),
(null, 
'Serial Experiments Lain',
'Serial Experiments Lain',
'シリアルエクスペリメンツレイン',
'TV',
'Psicológico',
'Drama, Mistério, Sci-Fi, Sobrenatural, Vanguarda',
'Triangle Staff',
13,
'23 min. por ep.',
'serial-experiments-lain-1.jpg'
),
(null, 
'Akira',
'Akira',
'AKIRA（アキラ）',
'Filme',
'Seinen, Gore, Militar',
'Ação, Aventura, Sci-Fi, Sobrenatural, Terror',
'Tokyo Movie Shinsha',
1,
'2 hr. 4 min.',
'akira-1.jpg'
),
(null, 
'Mob Psycho 100',
'Mob Psycho One Hundred',
'モブサイコ100',
'TV',
'Super Poder',
'Ação, Comédia, Sobrenatural',
'Bones',
12,
'24 min. por ep.',
'mob-psycho-100-1.jpg'
),
(null, 
'Mob Psycho 100 II',
'Mob Psycho 100 2nd Season',
'モブサイコ100 II',
'TV',
'Super Poder',
'Ação, Comédia, Sobrenatural',
'Bones',
13,
'24 min. por ep.',
'mob-psycho-100-II-1.jpg'
),
(null, 
'Kono Subarashii Sekai ni Shukufuku wo!',
'KonoSuba: God''s Blessing on This Wonderful World!',
'この素晴らしい世界に祝福を！',
'TV',
'Isekai, Paródia, Reencarnação',
'Aventura, Comédia, Fantasia',
'Studio Deen',
10,
'23 min. por ep.',
'konosuba-1.jpg'
),
(null, 
'Kono Subarashii Sekai ni Shukufuku wo!: Kono Subarashii Choker ni Shukufuku wo!',
'KonoSuba: God''s Blessing on This Wonderful World!: God''s Blessing on This Wonderful Choker!',
'この素晴らしい世界に祝福を！ 第11話 この素晴らしいチヨーカーに祝福を！',
'OVA',
'Isekai, Paródia, Reencarnação',
'Comédia, Fantasia',
'Studio Deen',
1,
'23 min.',
'konosuba-ova1-1.jpg'
);




INSERT INTO animeusuario VALUES
(100, '2022-05-20 14:35:23',10, 'Completo', 1, 1),
(101, '2022-05-20 14:36:23',7, 'Assistindo', 7, 1),
(102, '2022-05-20 14:40:23',9, 'Assistindo', 8, 1),
(103, '2022-05-20 14:47:23',9, 'Completo', 12, 1),
(104, '2022-05-20 14:48:23',4, 'Dropado', 2, 1),
(105, '2022-05-20 15:00:23',null, 'Planejo Ver', null, 1),
(106, '2022-05-20 15:01:23',4, 'Assistindo', 6, 1),
(107, '2022-05-20 15:08:23',10, 'Assistindo', 10, 1),
(108, '2022-05-20 15:09:23',null, 'Planejo Ver', null, 1),
(109, '2022-05-20 15:10:23',6, 'Assistindo', 8, 1),
(110, '2022-05-20 15:11:23',null, 'Planejo Ver', null, 1),
(111, '2022-05-20 15:12:23',7, 'Assistindo', 7, 1),
(112, '2022-05-20 15:13:23',9, 'Completo', 64, 1),
(113, '2022-05-20 15:14:23',10, 'Completo', 12, 1),
(114, '2022-05-20 15:15:23',null, 'Planejo Ver', null, 1),
(115, '2022-05-20 15:16:23',9, 'Completo', 1, 1),
(116, '2022-05-20 15:17:23',9, 'Completo', 23, 1),
(117, '2022-05-20 15:18:23',null, 'Planejo Ver', null, 1),
(118, '2022-05-20 15:19:23',10, 'Completo', 24, 1),
(119, '2022-05-20 15:20:23',null, 'Assistindo', 3, 1),
(120, '2022-05-20 15:21:23',null, 'Planejo Ver', null, 1);

INSERT INTO usuario 

SELECT * FROM usuario;
SELECT * FROM anime;
SELECT idAnime, nomeAnime, tipo, episodios FROM anime;
SELECT * FROM animeusuario;

-- CONSULTAS


desc usuario;
desc anime;
desc animeusuario;

SELECT idAnime, imagemAnime, nomeAnime, episodios, nota, statusAnime, epsAssistidos, tipo, genero
FROM Anime 
JOIN AnimeUsuario ON fkAnime = idAnime
WHERE fkUsuario = '1' 
ORDER BY statusAnime, nomeAnime
LIMIT 0, 10;

SELECT idAnime, imagemAnime, nomeAnime, episodios, nota, statusAnime, epsAssistidos, tipo, genero
FROM Anime 
JOIN AnimeUsuario ON fkAnime = idAnime
WHERE fkUsuario = '1'
AND statusAnime = 'Assistindo'
ORDER BY statusAnime, nomeAnime
LIMIT 10;

SELECT idAnime, imagemAnime, nomeAnime, episodios, nota, statusAnime, epsAssistidos
FROM Anime
JOIN AnimeUsuario ON fkAnime = idAnime
WHERE fkUsuario = 1
ORDER BY dataLista desc
LIMIT 3;

select * from animeusuario where fkUsuario = 1 order by dataLista desc;

SELECT COUNT(idAnime) as 'SomaStatus', statusAnime
FROM Anime
JOIN AnimeUsuario ON fkAnime = idAnime
WHERE fkUsuario = 1
GROUP BY statusAnime
ORDER BY statusAnime;

SELECT COUNT(idAnime) as 'totalAnimes', 
SUM(epsAssistidos) as 'totalEps',
ROUND(AVG(nota),1) as 'mediaNota'
FROM Anime
JOIN AnimeUsuario ON fkAnime = idAnime
WHERE fkUsuario = 1;

SELECT idAnime, imagemAnime, nomeAnime, 
COUNT(fkAnime) as 'Membros', 
ROUND(AVG(nota), 1) as 'NotaMedia'
FROM Anime
JOIN AnimeUsuario ON fkAnime = idAnime
GROUP BY fkAnime
ORDER BY Membros
LIMIT 7;

SELECT idAnime, imagemAnime, nomeAnime, genero,
COUNT(fkAnime) as 'Membros', 
ROUND(AVG(nota), 1) as 'NotaMedia'
FROM Anime
JOIN AnimeUsuario ON fkAnime = idAnime
WHERE genero LIKE '%Comédia%'
GROUP BY fkAnime
ORDER BY NotaMedia desc;

SELECT Anime.*, COUNT(fkAnime) as 'Membros',  
ROUND(AVG(nota),2) as 'NotaMedia'
FROM Anime
JOIN animeusuario ON fkAnime = idAnime
WHERE idAnime = 100
GROUP BY idAnime;
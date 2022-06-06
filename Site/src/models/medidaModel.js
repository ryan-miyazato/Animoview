var database = require("../database/config");

function buscarTodasMedidas(idUsuario, comeco, limite_linhas, exibicao) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        if (exibicao == 'Tudo') {
            instrucaoSql = `SELECT idAnime, imagemAnime, nomeAnime, episodios, nota, statusAnime, epsAssistidos, tipo, genero
            FROM Anime 
            JOIN AnimeUsuario ON fkAnime = idAnime
            WHERE fkUsuario = '${idUsuario}' 
            ORDER BY statusAnime, nomeAnime
            LIMIT ${comeco}, ${limite_linhas}`;
        } else {
            instrucaoSql = `SELECT idAnime, imagemAnime, nomeAnime, episodios, nota, statusAnime, epsAssistidos, tipo, genero
            FROM Anime 
            JOIN AnimeUsuario ON fkAnime = idAnime
            WHERE fkUsuario = '${idUsuario}' 
            AND statusAnime = '${exibicao}'
            ORDER BY statusAnime, nomeAnime
            LIMIT ${comeco}, ${limite_linhas}`;
        }
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimas3Medidas(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT idAnime, imagemAnime, nomeAnime, episodios, nota, statusAnime, epsAssistidos
            FROM Anime
            JOIN AnimeUsuario ON fkAnime = idAnime
            WHERE fkUsuario = ${idUsuario}
            ORDER BY dataLista desc
            LIMIT ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarAnimesDoUsuario(idUsuario, statusAtual) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        if (statusAtual == 'Tudo') {
            instrucaoSql = `SELECT COUNT(idAnime) as 'totalAnimes'
            FROM Anime
            JOIN AnimeUsuario ON fkAnime = idAnime
            WHERE fkUsuario = ${idUsuario}`;
        } else {
            instrucaoSql = `SELECT COUNT(idAnime) as 'totalAnimes'
            FROM Anime
            JOIN AnimeUsuario ON fkAnime = idAnime
            WHERE fkUsuario = ${idUsuario}
            AND statusAnime = '${statusAtual}'`;
        }
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarStatusPerfil(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = 
        `SELECT COUNT(idAnime) as 'SomaStatus', statusAnime
        FROM Anime
        JOIN AnimeUsuario ON fkAnime = idAnime
        WHERE fkUsuario = ${idUsuario}
        GROUP BY statusAnime
        ORDER BY statusAnime`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarTotalAnimes(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = 
        `SELECT COUNT(idAnime) as 'totalAnimes', 
        SUM(epsAssistidos) as 'totalEps',
        ROUND(AVG(nota),1) as 'mediaNota'
        FROM Anime
        JOIN AnimeUsuario ON fkAnime = idAnime
        WHERE fkUsuario = ${idUsuario}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function homeAnimesTop(ordem, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = 
        `SELECT idAnime, imagemAnime, nomeAnime, 
        COUNT(fkAnime) as 'Membros', 
        ROUND(AVG(nota), 1) as 'NotaMedia'
        FROM Anime
        JOIN AnimeUsuario ON fkAnime = idAnime
        GROUP BY fkAnime
        ORDER BY ${ordem} desc
        LIMIT ${limite_linhas};`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function homeAnimesGenero(genero, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = 
        `SELECT idAnime, imagemAnime, nomeAnime, 
        COUNT(fkAnime) as 'Membros', 
        ROUND(AVG(nota), 1) as 'NotaMedia'
        FROM Anime
        JOIN AnimeUsuario ON fkAnime = idAnime
        WHERE genero LIKE '%${genero}%'
        GROUP BY fkAnime
        ORDER BY NotaMedia desc
        LIMIT ${limite_linhas};`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function homeAnimesGenero2(genero, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = 
        `SELECT idAnime, imagemAnime, nomeAnime, 
        COUNT(fkAnime) as 'Membros', 
        ROUND(AVG(nota), 1) as 'NotaMedia'
        FROM Anime
        JOIN AnimeUsuario ON fkAnime = idAnime
        WHERE genero LIKE '%${genero}%'
        GROUP BY fkAnime
        ORDER BY NotaMedia desc
        LIMIT ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function acharAnime(idAtual, idUsuario, idAnime) {
    var idAtualVar = idAtual;
    var idUsuarioVar = idUsuario;
    var idAnimeVar = idAnime;
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        if(idAtualVar == idUsuarioVar){
            instrucaoSql = 
        `SELECT nota, statusAnime, epsAssistidos 
        FROM AnimeUsuario
        WHERE fkUsuario = ${idUsuarioVar}
        AND fkAnime = ${idAnimeVar};`;
        } else {
            instrucaoSql = 
            `SELECT Anime.*, COUNT(fkAnime) as 'Membros',  
            ROUND(AVG(nota),2) as 'NotaMedia'
            FROM Anime
            JOIN AnimeUsuario ON idAnime = fkAnime
            WHERE idAnime = ${idAnimeVar}
            GROUP BY fkAnime`;
        }

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTodasMedidas,
    buscarUltimas3Medidas,
    contarAnimesDoUsuario,
    contarStatusPerfil,
    contarTotalAnimes,
    homeAnimesTop,
    homeAnimesGenero,
    homeAnimesGenero2,
    acharAnime
}

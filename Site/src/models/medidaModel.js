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

module.exports = {
    buscarTodasMedidas,
    buscarUltimas3Medidas,
    contarAnimesDoUsuario,
    contarStatusPerfil,
    contarTotalAnimes
}

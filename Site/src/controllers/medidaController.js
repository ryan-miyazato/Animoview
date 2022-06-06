var medidaModel = require("../models/medidaModel");

function buscarTodasMedidas(req, res) {

    var comeco = req.body.comeco;
    var limite_linhas = req.body.limite;

    var idUsuario = req.body.idUsuario;
    var exibicao = req.body.exibicao;


    console.log(`Recuperando as ultimas ${limite_linhas} entradas de ${exibicao} a partir do ${comeco}º registro`);

    medidaModel.buscarTodasMedidas(idUsuario, comeco, limite_linhas, exibicao).then(function (resultado) {

        console.log("Número de resultados: " + resultado.length)

        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimas3Medidas(req, res) {

    const limite_linhas = 3;

    var idUsuario = req.params.idUsuario;


    console.log(`Recuperando as ultimas ${limite_linhas} entradas`);

    medidaModel.buscarUltimas3Medidas(idUsuario, limite_linhas).then(function (resultado) {

        console.log("Número de resultados: " + resultado.length)

        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function contarAnimesDoUsuario(req, res) {
    var idUsuario = req.body.idUsuario;
    var statusAtual = req.body.statusAtual;

    console.log(`Recuperando contagem de animes.`);

    medidaModel.contarAnimesDoUsuario(idUsuario, statusAtual).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function contarStatusPerfil(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando contagem dos status dos animes.`);

    medidaModel.contarStatusPerfil(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function contarTotalAnimes(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando total de animes do usuário.`);

    medidaModel.contarTotalAnimes(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function homeAnimesTop(req, res) {
    var ordem = req.params.ordemVar
    const limite_linhas = 7;

    console.log(`Recuperando animes em alta da home`);

    medidaModel.homeAnimesTop(ordem, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function homeAnimesGenero(req, res) {
    var genero = req.params.generoVar
    const limite_linhas = 7;

    console.log(`Recuperando animes do gênero ${genero} da home`);

    medidaModel.homeAnimesGenero(genero, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function homeAnimesGenero2(req, res) {
    var genero = req.params.generoVar
    const limite_linhas = 7;

    console.log(`Recuperando animes do gênero ${genero} da home`);

    medidaModel.homeAnimesGenero(genero, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function acharAnime(req, res) {
    var idAtual = req.body.idAtual;
    var idUsuario = req.body.idUsuario;
    var idAnime = req.body.idAnime;

    console.log(`Recuperando dados do Anime de id ${idAnime} do usuário ${idUsuario}`);

    medidaModel.acharAnime(idAtual, idUsuario, idAnime).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
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
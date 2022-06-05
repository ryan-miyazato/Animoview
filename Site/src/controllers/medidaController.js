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

    console.log(`Recuperando medidas em tempo real`);

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

    console.log(`Recuperando medidas em tempo real`);

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

    console.log(`Recuperando medidas em tempo real`);

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

module.exports = {
    buscarTodasMedidas,
    buscarUltimas3Medidas,
    contarAnimesDoUsuario,
    contarStatusPerfil,
    contarTotalAnimes
}
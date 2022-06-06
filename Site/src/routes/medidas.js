var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.post("/todas", function (req, res) {
    medidaController.buscarTodasMedidas(req, res);
});

router.get("/ultimas3/:idUsuario", function (req, res) {
    medidaController.buscarUltimas3Medidas(req, res);
});

router.post("/contar", function (req, res) {
    medidaController.contarAnimesDoUsuario(req, res);
});

router.get("/contarStatus/:idUsuario", function (req, res) {
    medidaController.contarStatusPerfil(req, res);
});

router.get("/totalUsuario/:idUsuario", function (req, res) {
    medidaController.contarTotalAnimes(req, res);
});

router.get("/homeAnimesTop/:ordemVar", function (req, res) {
    medidaController.homeAnimesTop(req, res);
});

router.get("/homeAnimesGenero/:generoVar", function (req, res) {
    medidaController.homeAnimesGenero(req, res);
});

router.get("/homeAnimesGenero2/:generoVar", function (req, res) {
    medidaController.homeAnimesGenero2(req, res);
});

router.post("/acharAnime", function (req, res) {
    medidaController.acharAnime(req, res);
});

router.post("/atualizarAnime", function (req, res) {
    medidaController.atualizarAnime(req, res);
});

router.post("/adicionarAnime", function (req, res) {
    medidaController.adicionarAnime(req, res);
});




module.exports = router;
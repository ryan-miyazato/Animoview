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

module.exports = router;
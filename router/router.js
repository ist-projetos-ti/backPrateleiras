const express = require("express");
const globalController = require("../controllers/globalController");

const routes = express.Router();

routes.get("/infoSensores", globalController.getInformationSensores);
routes.get(
  "/info/:prateleira/:mercado",
  globalController.getProductsInformations
);
routes.post("/save", globalController.saveDivisoriaInformations);
routes.post("/save2/:idProduto", globalController.savePrecoInformation);
routes.post("/erroDivisoria", globalController.alertaErro);

module.exports = routes;

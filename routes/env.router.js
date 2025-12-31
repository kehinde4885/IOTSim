//MiniAPP or Router for sensor routes

import express from "express";

export function createEnvRoutes( envManager) {
  const router = express.Router();

    //
  router.post("/update", (req, res) => {
    envManager.setAmbientTemperature(99);
  });

  


  return router;
}

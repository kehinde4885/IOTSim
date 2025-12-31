import express from "express"

export function createDeviceRoutes(devManager) {
  const router = express.Router()

  router.get("/", (req, res) => {

    console.log("Getting device list")
    
  })


  router.post("/create", (req, res) => {
    console.log("Creating Device")
    
  })



  return router
}
import { Router } from "express";
import { vehicleController } from "./vehicles.controller";

const router = Router();

router.post("/vehicles", vehicleController.createVehicleIntoDb);

router.get("/vehicles", vehicleController.getVehiclesFromDb);

export const vehicleRoute = router;

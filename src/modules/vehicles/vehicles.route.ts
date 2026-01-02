import { Router } from "express";
import { vehicleController } from "./vehicles.controller";

const router = Router();

router.post("/", vehicleController.createVehicleIntoDb);

router.get("/", vehicleController.getVehiclesFromDb);

router.get("/:vehicleId", vehicleController.getVehiclesFromDb);

router.put("/:vehicleId", vehicleController.updateVehicle);

router.delete("/:vehicleId", vehicleController.deleteVehicle);

export const vehicleRoute = router;

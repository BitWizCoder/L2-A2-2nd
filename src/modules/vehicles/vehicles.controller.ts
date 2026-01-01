import { Request, Response } from "express";
import { vehicleServices } from "./vehicles.service";

const createVehicleIntoDb = async (req: Request, res: Response) => {
  try {
    const result = await vehicleServices.createVehicleIntoDb(req.body);

    return res.status(201).json({
      success: true,
      message: "Vehicle created successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

const getVehiclesFromDb = async (req: Request, res: Response) => {
  try {
    const result = await vehicleServices.getVehicleFromDb();

    return res.status(201).json({
      success: true,
      message: "Vehicle retrived successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export const vehicleController = {
  createVehicleIntoDb,
  getVehiclesFromDb,
};

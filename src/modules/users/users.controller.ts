import { Request, Response } from "express";
import { userServices } from "./users.services";

const getAllUsersFromDb = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsersFromDb();

    return res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: result.rows,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const userController = {
  getAllUsersFromDb,
};

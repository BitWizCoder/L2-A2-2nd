import { Request, Response } from "express";
import { bookingServices } from "./bookings.service";

const createBooking = async (req: Request, res: Response) => {
  try {
    const loggedInUser = req.user!;
    const result = await bookingServices.createBookingInDb(
      loggedInUser.id,
      req.body,
    );

    return res.status(201).json({
      success: true,
      message: "Vehicle booked successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const bookingController = {
  createBooking,
};

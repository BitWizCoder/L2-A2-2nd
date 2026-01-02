import { Router } from "express";
import auth from "../../middleware/auth";
import { bookingController } from "./bookings.controller";

const router = Router();

router.post("/", auth("admin", "user"), bookingController.createBooking);

export const bookingRoute = router;

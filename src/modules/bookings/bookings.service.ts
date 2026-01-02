import { pool } from "../../config/db";

const createBookingInDb = async (userId: number, payload: any) => {
  const { vehicleId, startDate, endDate } = payload;

  // 1. Check if vehicle is available
  const vehicle = await pool.query("SELECT * FROM vehicles WHERE id = $1", [
    vehicleId,
  ]);

  if (vehicle.rowCount === 0) throw new Error("Vehicle not found");
  if (vehicle.rows[0].availability_status !== "available") {
    throw new Error("Vehicle is already booked for these dates");
  }

  // 2. Calculate Total Price
  // Formula: (EndDate - StartDate) in days * daily_rate
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffInTime = end.getTime() - start.getTime();
  const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));

  if (diffInDays <= 0) throw new Error("End date must be after start date");

  const totalPrice = diffInDays * vehicle.rows[0].daily_rate;

  // 3. Create the Booking
  const newBooking = await pool.query(
    `INSERT INTO bookings (user_id, vehicle_id, start_date, end_date, total_price, availability_status) 
     VALUES ($1, $2, $3, $4, $5, 'booked') RETURNING *`,
    [userId, vehicleId, startDate, endDate, totalPrice],
  );

  // 4. Update the Vehicle status to 'booked'
  await pool.query(
    "UPDATE vehicles SET availability_status = 'booked' WHERE id = $1",
    [vehicleId],
  );

  return newBooking;
};

export const bookingServices = {
  createBookingInDb,
};

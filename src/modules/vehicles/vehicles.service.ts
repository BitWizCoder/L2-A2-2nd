import { pool } from "../../config/db";

// Define an interface for your vehicle data
interface TVehicle {
  vehicle_name: string;
  type: string;
  registration_number: string;
  daily_rent_price: number;
  availability_status: string;
}

const createVehicleIntoDb = async (payload: TVehicle) => {
  const {
    vehicle_name,
    type,
    registration_number,
    daily_rent_price,
    availability_status,
  } = payload;

  const result = await pool.query(
    `
    INSERT INTO vehicles (vehicle_name,
    type,
    registration_number,
    daily_rent_price,
    availability_status) 
    VALUES ($1, $2, $3, $4, $5) 
    RETURNING *;
    `,
    [
      vehicle_name,
      type,
      registration_number,
      daily_rent_price,
      availability_status,
    ],
  );

  return result;
};

const getVehicleFromDb = async () => {
  const result = await pool.query(
    `
    SELECT * FROM vehicles
    `,
  );

  return result;
};

export const vehicleServices = {
  createVehicleIntoDb,
  getVehicleFromDb,
};

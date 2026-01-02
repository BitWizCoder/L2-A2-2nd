import { pool } from "../../config/db";

const getAllUsersFromDb = async () => {
  const result = await pool.query(`SELECT * FROM users`);
  return result;
};

export const userServices = {
  getAllUsersFromDb,
};

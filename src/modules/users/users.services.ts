import { pool } from "../../config/db";

const getAllUsersFromDb = async () => {
  const result = await pool.query(`SELECT * FROM users`);
  return result;
};

const updateUserInDb = async (id: string, payload: any) => {
  const { name, email, role } = payload;

  const result = await pool.query(
    `
    UPDATE users 
    SET 
      name = COALESCE($1, name),
      email = COALESCE($2, email),
      role = COALESCE($3, role)
    WHERE id = $4
    RETURNING *;
    `,
    [name, email, role, id],
  );

  return result;
};

export const userServices = {
  getAllUsersFromDb,
  updateUserInDb,
};

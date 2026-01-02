import { Router } from "express";
import { userController } from "./users.controller";
import auth from "../../middleware/auth";

const router = Router();

router.get("/", auth("admin"), userController.getAllUsersFromDb);

export const userRoute = router;

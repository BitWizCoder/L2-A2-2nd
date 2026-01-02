import { Router } from "express";
import { userController } from "./users.controller";
import auth from "../../middleware/auth";

const router = Router();

router.get("/", auth("admin"), userController.getAllUsersFromDb);

router.put("/:userId", auth("admin", "user"), userController.updateUser);

export const userRoute = router;

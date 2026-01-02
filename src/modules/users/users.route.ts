import { Router } from "express";
import { userController } from "./users.controller";
import auth from "../../middleware/auth";

const router = Router();

router.get("/", auth("admin"), userController.getAllUsersFromDb);

router.put("/:userId", auth("admin", "user"), userController.updateUser);

router.delete("/:userId", auth("admin"), userController.deleteUser);

export const userRoute = router;

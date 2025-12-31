import { Router } from "express";
import { authController } from "./auth.controller";

const router = Router();

router.post("/signup", authController.createUserIntoDb);

router.post("/signin", authController.loginuserIntoDB);

export const authRoute = router;

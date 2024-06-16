import { Router } from "express";
import { createUser, loginUser } from "../controllers/user.controller.js";
import { generateContent } from "../controllers/user.controller.js";

const router = Router();

router.route("/createUser").post(createUser);
router.route("/generate").post(generateContent);
router.route("/login").post(loginUser);

export default router;

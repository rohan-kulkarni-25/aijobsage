import { Router } from "express";
import {
  createUser,
  getCurrentUser,
  getLatestUsers,
  loginUser,
  updateProfile,
} from "../controllers/user.controller.js";
import { generateContent } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/createUser").post(createUser);
router.route("/generate").post(verifyJWT, generateContent);
router.route("/login").post(loginUser);
router.route("/loginwithtoken").post(verifyJWT, getCurrentUser);
router.route("/updateProfile").post(verifyJWT, updateProfile);
router.route("/latestusers").post(getLatestUsers);

export default router;

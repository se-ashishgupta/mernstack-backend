import express from "express";
import {
  register,
  login,
  logout,
  myProfile,
} from "../controllers/userControler.js";
const router = express.Router();
import { isAuthenticated } from "../middleware/auth.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticated, myProfile);

export default router;

import express from "express";
import { loginPage, registerPage } from "../controllers/authController.js";

const router = express.Router();

router.get("/login", loginPage);
router.get("/register", registerPage);

export default router;
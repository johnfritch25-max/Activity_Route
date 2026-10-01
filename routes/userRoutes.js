import express from "express";
import { listUsers, getUserById } from "../controllers/userController.js";

const router = express.Router();

router.get("/", listUsers);
router.get("/:id", getUserById);

export default router;
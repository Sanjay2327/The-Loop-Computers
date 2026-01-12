import express from "express";
import {
  createOrder,
  getOrders,
} from "../controllers/orderController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/", protectAdmin, getOrders);

export default router;

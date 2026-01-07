// 1
// import express from "express";
// import { getProducts } from "../controllers/productController.js";

// const router = express.Router();

// router.get("/", getProducts);

// export default router;

import express from "express";
import { getProducts } from "../controllers/productController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.get("/", getProducts);

router.post("/", protectAdmin, createProduct);

// Admin-only (test route)
router.post("/admin-test", protectAdmin, (req, res) => {
  res.json({ message: "Admin access granted" });
});

export default router;

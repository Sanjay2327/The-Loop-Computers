import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protectAdmin, upload.single("image"), (req, res) => {
  res.json({
    imageUrl: req.file.path || req.file.secure_url,
  });
});

export default router;

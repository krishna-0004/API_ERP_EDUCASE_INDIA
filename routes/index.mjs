import express from "express";

import healthRoutes from "./health.routes.mjs";
import schoolRoutes from "./school.routes.mjs";

const router = express.Router();

router.use("/health", healthRoutes);
router.use("/schools", schoolRoutes);

export default router;
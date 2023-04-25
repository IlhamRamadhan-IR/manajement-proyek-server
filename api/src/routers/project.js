import express from "express";
import { createProject, projectHasTeam } from "../controllers/project.js";
import { checkAuth } from "../middleware/authUser.js";

const router = express.Router();

router.post("/", checkAuth, createProject);
router.get("/", checkAuth, projectHasTeam);
export default router;
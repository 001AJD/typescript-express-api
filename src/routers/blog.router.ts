import express from "express";
import { getAllBlogs } from "../controllers/blogs.controller";
const router = express.Router();

router.get("/blogs", getAllBlogs);

export default router;

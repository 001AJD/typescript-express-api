import express from "express";
import {
	getAllBlogsController,
	getBlogByIdController,
} from "../controllers/blogs.controller";

const router = express.Router();

router.get("/blogs", getAllBlogsController);
router.get("/blog/:id", getBlogByIdController);

export default router;

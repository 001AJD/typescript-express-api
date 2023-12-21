import express from "express";
import {
	getAllBlogsController,
	getBlogByIdController,
} from "../controllers/blogs.controller";

import {
	createBlogByIdValidationRules,
	validateBlogIByPayload,
} from "../validator/validateBlogById";

const router = express.Router();

router.get("/blogs", getAllBlogsController);
router.get(
	"/blog/:id",
	createBlogByIdValidationRules(),
	validateBlogIByPayload,
	getBlogByIdController
);

export default router;

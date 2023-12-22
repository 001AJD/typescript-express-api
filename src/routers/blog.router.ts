import express from "express";
import {
	getAllBlogsController,
	getBlogByIdController,
	getCommentsByBlogIdController,
} from "../controllers/blogs.controller";

import {
	createBlogByIdValidationRules,
	validateBlogIByPayload,
} from "../validator/validateBlogById";

import {
	createCommentsByIdValidationRules,
	validateCommentsByBlogIdParams,
} from "../validator/commentsByBlogId.validator";

const router = express.Router();

router.get("/blogs", getAllBlogsController);
router.get(
	"/blog/:id",
	createBlogByIdValidationRules(),
	validateBlogIByPayload,
	getBlogByIdController
);

router.get(
	"/comments/:blogid",
	createCommentsByIdValidationRules(),
	validateCommentsByBlogIdParams,
	getCommentsByBlogIdController
);

export default router;

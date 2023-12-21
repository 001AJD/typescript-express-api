import { Request, Response } from "express";
import requestLogger from "../utils/logger/requestLogger";
import { getBlogs, getBlogById } from "../services/blogs.service";

const getAllBlogsController = async (req: Request, res: Response) => {
	const start = process.hrtime.bigint();
	try {
		const response = await getBlogs();
		requestLogger(
			req,
			"info",
			"getAllBlogsController => ok",
			start,
			process.hrtime.bigint()
		);
		res.status(200).json(response);
	} catch (err: any) {
		if (err.message === "no data found") {
			requestLogger(
				req,
				"error",
				err.stack,
				start,
				process.hrtime.bigint()
			);
			res.status(404).json({ message: err.message });
		} else {
			requestLogger(req, "error", err, start, process.hrtime.bigint());
			res.status(500).json({ message: "Internal Server Error" });
		}
	}
};

const getBlogByIdController = async (req: Request, res: Response) => {
	const start = process.hrtime.bigint();
	const blogId = req.params.id;
	try {
		const response = await getBlogById(blogId);
		requestLogger(
			req,
			"info",
			"getBlogByIdController => ok",
			start,
			process.hrtime.bigint()
		);
		res.status(200).json(response);
	} catch (err: any) {
		if (err.message === "no data found") {
			requestLogger(
				req,
				"error",
				err.stack,
				start,
				process.hrtime.bigint()
			);
			res.status(404).json({ message: err.message });
		} else {
			requestLogger(
				req,
				"error",
				err.stack,
				start,
				process.hrtime.bigint()
			);
			res.status(500).json({ message: "Internal Server Error" });
		}
	}
};

export { getAllBlogsController, getBlogByIdController };

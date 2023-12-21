import { Request, Response } from "express";
import { getBlogs, getBlogById } from "../services/blogs.service";

const getAllBlogsController = async (req: Request, res: Response) => {
	try {
		const response = await getBlogs();
		res.status(200).json(response);
	} catch (err: any) {
		if (err.message === "no data found") {
			res.status(404).json({ message: err.message });
		} else {
			res.status(500).json({ message: "Internal Server Error" });
		}
	}
};

const getBlogByIdController = async (req: Request, res: Response) => {
	const blogId = req.params.id;
	try {
		const response = await getBlogById(blogId);
		res.status(200).json(response);
	} catch (err: any) {
		if (err.message === "no data found") {
			res.status(404).json({ message: err.message });
		} else {
			res.status(500).json({ message: "Internal Server Error" });
		}
	}
};

export { getAllBlogsController, getBlogByIdController };

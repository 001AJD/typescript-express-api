import { Request, Response } from "express";
import { getBlogs } from "../services/blogs.service";

const getAllBlogs = async (req: Request, res: Response) => {
	try {
		const response = await getBlogs();
		res.status(200).json(response);
	} catch (err: any) {
		if (err.message === "no data found") {
			res.status(404).json({ message: "err.message" });
		} else {
			res.status(500).json({ message: "Internal Server Error" });
		}
	}
};

export { getAllBlogs };

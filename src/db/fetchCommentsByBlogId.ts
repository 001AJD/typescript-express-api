import BlogModel from "./models/blog.model";
import dbLogger from "../utils/logger/dbLogger";

const fetchCommentsByBlogId = async (blogId: string) => {
	const start = process.hrtime.bigint();
	const fnName = "fetchCommentsByBlogId";
	const filter = {
		_id: blogId,
	};
	const projection = { _id: 0, comments: 1 };
	let dbResult = await BlogModel.findOne(filter, projection);
	if (!dbResult) {
		dbLogger(start, process.hrtime.bigint(), fnName);
		throw new Error("no data found");
	}
	if (dbResult) {
		dbLogger(start, process.hrtime.bigint(), fnName);
		return dbResult.comments;
	}
};

export default fetchCommentsByBlogId;

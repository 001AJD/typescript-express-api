import BlogModel from "./models/blog.model";
import dbLogger from "../utils/logger/dbLogger";

const fetchBlogById = async (blogId: string) => {
	const start = process.hrtime.bigint();
	const fnName = "fetchBlogById";
	const filter = {
		_id: blogId,
	};
	let dbResult = await BlogModel.findOne(filter);
	if (!dbResult) {
		dbLogger(start, process.hrtime.bigint(), fnName);
		throw new Error("no data found");
	}
	if (dbResult) {
		dbLogger(start, process.hrtime.bigint(), fnName);
		return dbResult;
	}
};

export default fetchBlogById;

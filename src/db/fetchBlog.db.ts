import BlogModel from "./models/blog.model";
import dbLogger from "../utils/logger/dbLogger";

const fetchBlog = async () => {
	const start = process.hrtime.bigint();
	const fnName = "fetchBlog";
	let dbResult = await BlogModel.find();
	if (dbResult.length === 0) {
		dbLogger(start, process.hrtime.bigint(), fnName);
		throw new Error("no data found");
	} else {
		dbLogger(start, process.hrtime.bigint(), fnName);
		return dbResult;
	}
};

export default fetchBlog;

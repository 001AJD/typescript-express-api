import BlogModel from "./models/blog.model";

const fetchBlog = async () => {
	let dbResult = await BlogModel.find();
	if (dbResult.length === 0) {
		throw new Error("no data found");
	} else {
		return dbResult;
	}
};

export default fetchBlog;

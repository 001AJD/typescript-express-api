import BlogModel from "./models/blog.model";

const fetchBlogById = async (blogId: string) => {
	const filter = {
		_id: blogId,
	};
	let dbResult = await BlogModel.findOne(filter);
	if (!dbResult) {
		throw new Error("no data found");
	}
	if (dbResult) {
		return dbResult;
	}
};

export default fetchBlogById;

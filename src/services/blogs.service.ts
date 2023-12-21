import { getBlogsMapper } from "./dto/getBlogs.mapper";
import { blogByIdMapper } from "./dto/getBlogById.mapper";
import fetchBlog from "../db/fetchBlog.db";
import fetchBlogById from "../db/fetchBlogById.db";

const getBlogs = async () => {
	const dbResponse = await fetchBlog();
	return getBlogsMapper(dbResponse);
};

const getBlogById = async (blogId: string) => {
	const dbResponse = await fetchBlogById(blogId);
	return blogByIdMapper(dbResponse);
};

export { getBlogs, getBlogById };

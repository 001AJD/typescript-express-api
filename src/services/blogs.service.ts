import { getBlogsMapper } from "./dto/getBlogs.mapper";
import fetchBlog from "../db/fetchBlog.db";

const getBlogs = async () => {
	const dbResponse = await fetchBlog();
	return getBlogsMapper(dbResponse);
};

export { getBlogs };

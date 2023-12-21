import { Types } from "mongoose";
import { BlogDocument, Comment } from "../../db/models/blog.model";

interface IBlogsResponse {
	id?: Types.ObjectId;
	author?: string;
	title?: string;
	comments?: Comment[];
}

const blogByIdMapper = (item: BlogDocument | undefined) => {
	let response: IBlogsResponse = {
		id: item?._id,
		author: item?.userId,
		title: item?.title,
		comments: item?.comments,
	};

	return response;
};

export { blogByIdMapper };

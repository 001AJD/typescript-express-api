import { Types } from "mongoose";
import { BlogDocument, Comment } from "../../db/models/blog.model";

interface IBlogsResponse {
	id: Types.ObjectId;
	author: string;
	title: string;
	comments: Comment[];
}

const getBlogsMapper = (data: BlogDocument[]) => {
	let response = data.map((item: BlogDocument) => {
		let myDoc: IBlogsResponse = {
			id: item._id,
			author: item.userId,
			title: item.title,
			comments: item.comments,
		};
		return myDoc;
	});
	return response;
};

export { getBlogsMapper };

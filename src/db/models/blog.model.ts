import { Schema, model, Document, Types } from "mongoose";

export interface Comment {
	userName: string;
	comment: string;
	date: Date;
}

export interface BlogDocument extends Document {
	userId: string;
	title: string;
	body: string;
	comments: Comment[];
}

const CommentSchema: Schema = new Schema<Comment>({
	userName: String,
	comment: String,
	date: Date,
});

const blogSchema: Schema = new Schema<BlogDocument>(
	{
		userId: String,
		title: String,
		body: String,
		comments: [CommentSchema],
	},
	{ versionKey: false }
);

const BlogModel = model<BlogDocument>("blogs", blogSchema, "blogs");
export default BlogModel;

import { mock } from "sinon";
import { getCommentsByBlogIdController } from "../src/controllers/blogs.controller";
import { Request, Response } from "express";
import BlogModel from "../src/db/models/blog.model";

describe("Test Suite for getCommentsByBlogIdController", () => {
	it("Should return comments of a given blog", (done) => {
		const req = { params: {} } as Request;
		req.params.id = "DUMMYID";
		const res = {
			status: function (s) {
				this.statusCode = s;
				return this;
			},
			json: function (s) {
				this.statusCode = s;
				return this;
			},
		} as Response;

		const dbResponse = {
			comments: [
				{
					userName: "Ajinkya Dhomne",
					comment: "Comment 1",
					date: "2023-12-09T07:31:37.258Z",
					_id: "657417d912c0ad0f24c0a751",
				},
			],
		};
		const BlogModelMock = mock(BlogModel);
		BlogModelMock.expects("findOne").resolves(dbResponse);
		getCommentsByBlogIdController(req, res);
		BlogModelMock.verify();
		BlogModelMock.restore();
		done();
	});

	it("The blogId is not present in the DB", (done) => {
		const req = { params: {} } as Request;
		req.params.id = "DUMMYID";
		const res = {
			status: function (s) {
				this.statusCode = s;
				return this;
			},
			json: function (s) {
				this.statusCode = s;
				return this;
			},
		} as Response;

		const dbResponse = null;
		const BlogModelMock = mock(BlogModel);
		BlogModelMock.expects("findOne").resolves(dbResponse);
		getCommentsByBlogIdController(req, res);
		BlogModelMock.verify();
		BlogModelMock.restore();
		done();
	});
});

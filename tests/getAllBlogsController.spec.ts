import { getAllBlogsController } from "../src/controllers/blogs.controller";
import { Request, Response } from "express";
import BlogModel from "../src/db/models/blog.model";
import { mock } from "sinon";

describe("Test suite for getAllBlogsController", () => {
	it("Should return list of blogs", (done) => {
		const req = {} as Request;
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

		const dbResponse = [
			{
				id: "DummID",
				author: "DUMMY_AUTHOR",
				title: "DUMMY_TITLE",
				body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			},
		];
		const BlogModelMock = mock(BlogModel);
		BlogModelMock.expects("find").withArgs().resolves(dbResponse);
		getAllBlogsController(req, res);
		BlogModelMock.verify();
		BlogModelMock.restore();
		done();
	});

	it("Should return empty list of blogs", (done) => {
		const req = {} as Request;
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

		const dbResponse: any = [];
		const BlogModelMock = mock(BlogModel);
		BlogModelMock.expects("find").withArgs().resolves(dbResponse);
		getAllBlogsController(req, res);
		BlogModelMock.verify();
		BlogModelMock.restore();
		done();
	});
});

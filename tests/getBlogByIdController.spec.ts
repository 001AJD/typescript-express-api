import { getBlogByIdController } from "../src/controllers/blogs.controller";
import { Request, Response } from "express";
import BlogModel from "../src/db/models/blog.model";
import { mock } from "sinon";
import { expect } from "chai";

describe("Test suite for getBlogsByIdController", () => {
	it("Should return a single blog", (done) => {
		const req = {
			params: {},
		} as Request;
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
			id: "DummID",
			author: "DUMMY_AUTHOR",
			title: "DUMMY_TITLE",
			body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		};

		const BlogModelMock = mock(BlogModel);
		BlogModelMock.expects("findOne").resolves(dbResponse);
		getBlogByIdController(req, res);
		BlogModelMock.verify();
		BlogModelMock.restore();
		expect(Array.isArray(dbResponse)).to.be.equal(false);
		done();
	});

	it("DB query results in no data found. 404 scenario", (done) => {
		const req = {
			params: {},
		} as Request;
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
		getBlogByIdController(req, res);
		BlogModelMock.verify();
		BlogModelMock.restore();
		done();
	});
});

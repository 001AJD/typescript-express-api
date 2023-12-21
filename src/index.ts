import express from "express";
import helmet from "helmet";
import logger from "./utils/logger/logger";
import { createConnection } from "./db/mongoConnection";
import blogRouter from "./routers/blog.router";

const init = async () => {
	const app = express();
	app.use(helmet());
	createConnection();
	app.use("/api/v1", blogRouter);
	app.listen(3000, () => {
		logger.debug("Listening on port 3000");
	});
};

init();

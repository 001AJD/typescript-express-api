import express from "express";
import helmet from "helmet";
import logger from "./utils/logger/logger";
import { createConnection } from "./db/mongoConnection";
import blogRouter from "./routers/blog.router";
import verifyApiKey from "./middlewares/verifyKey";

const init = async () => {
	const app = express();
	app.use(helmet());
	createConnection();
	app.use(verifyApiKey);
	app.use("/api/v1", blogRouter);
	app.listen(3000, () => {
		logger.info("Listening on port 3000");
	});
};

init();

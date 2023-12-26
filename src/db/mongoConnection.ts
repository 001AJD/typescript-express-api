import mongoose from "mongoose";
import { config } from "dotenv";
import logger from "../utils/logger/logger";
config();
const connectionString: string = process.env.MONGO_CONNECTION_STRING || "";

const createConnection = async () => {
	return new Promise((resolve, reject) => {
		mongoose
			.connect(connectionString)
			.then((response) => {
				logger.info("Connected to Database!");
				resolve(response);
			})
			.catch((err: any) => {
				logger.error("Error Connecting to database => " + err.stack);
				reject(err);
			});
	});
};

export { createConnection };

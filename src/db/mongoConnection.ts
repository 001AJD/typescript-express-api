import mongoose from "mongoose";
import { config } from "dotenv";
import logger from "../utils/logger/logger";
config();
const connectionString: string = process.env.MONGO_CONNECTION_STRING || "";

const createConnection = async () => {
	try {
		await mongoose.connect(connectionString);
		logger.info("Connected to Database!");
	} catch (e: any) {
		logger.error("Error connecting to Database ==> " + e.stack);
	}
};

export { createConnection };

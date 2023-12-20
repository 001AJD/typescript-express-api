import mongoose from "mongoose";
import { config } from "dotenv";
config();
const connectionString: string = process.env.MONGO_CONNECTION_STRING || "";

const createConnection = async () => {
	try {
		await mongoose.connect(connectionString);
		console.log("Connected to Database!");
	} catch (e: any) {
		console.error(e.toString());
	}
};

export { createConnection };

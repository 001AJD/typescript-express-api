import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger/logger";

const verifyApiKey = (req: Request, res: Response, next: NextFunction) => {
	if (req.get("api-key") === process.env.API_KEY) {
		logger.info("Valid api-key for request ==> " + req.path);
		next();
	} else {
		logger.error("Invalid api-key for request ==> " + req.path);
		res.status(403).end();
	}
};

export default verifyApiKey;

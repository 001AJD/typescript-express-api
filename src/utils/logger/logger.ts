import logger from "./loggerConfig";
import { Request } from "express";

const requestLogger = (
	req: Request,
	logLevel: string,
	message: string,
	startTime: bigint,
	endTime: bigint
) => {
	const time = (endTime - startTime) / 1000000n; // convert nano seconds to miliseconds
	const logObject = {
		path: req.path,
		message: message,
		time: `${time}(ms)`,
	};
	if (logLevel === "info") {
		logger.info(logObject);
	}
	if (logLevel === "error") {
		logger.error(logObject);
	}
};

export default requestLogger;

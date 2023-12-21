import logger from "./logger";

const dbLogger = (startTime: bigint, endTime: bigint, functionName: string) => {
	const time = (endTime - startTime) / 1000000n;
	const logObject = {
		dbFunction: functionName,
		time: `${time}(ms)`,
		queryTime: "",
	};
	if (time < 200) {
		logObject.queryTime = "fast";
		logger.info(logObject);
	}
	if (time > 200) {
		logObject.queryTime = "slow";
		logger.warn(logObject);
	}
};

export default dbLogger;

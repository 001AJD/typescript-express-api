import { createLogger, format, transports } from "winston";

const loggerConfig = {
	format: format.combine(format.json(), format.colorize({ all: true })),
	transports: [new transports.Console()],
};

const logger = createLogger(loggerConfig);

export default logger;

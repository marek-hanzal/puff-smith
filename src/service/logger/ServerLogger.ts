import winston from "winston";

export const ServerLogger = winston.createLogger({
	level: "silly",
	format: winston.format.json(),
	transports: [
		new winston.transports.Console({
			format: winston.format.colorize(),
		}),
	]
});

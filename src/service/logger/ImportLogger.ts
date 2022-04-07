import winston from "winston";
import LokiTransport from "winston-loki";

export const ImportLogger = winston.createLogger({
	level: "silly",
	format: winston.format.json(),
	transports: [
		new winston.transports.Console({
			format: winston.format.combine(
				winston.format.colorize(),
				winston.format.simple(),
			),
		}),
		new LokiTransport({
			level: "debug",
			host: "http://127.0.0.1:3100",
			json: true,
			onConnectionError: e => console.error(e),
			labels: {job: "wut!?"}
		}),
	],
	rejectionHandlers: [
		// new winston.transports.File({ filename: 'rejections.log' })
	]
});

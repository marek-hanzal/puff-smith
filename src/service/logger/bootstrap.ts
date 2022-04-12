import {createConsole, createLoki} from "@leight-core/server";
import winston from "winston";

export const BootstrapLogger = () => {
	winston.loggers.add("import", {
		level: "silly",
		format: winston.format.json(),
		transports: [
			createConsole(),
			createLoki({
				labels: {
					service: "import",
				},
			}),
		],
	});
	winston.loggers.add("service", {
		level: "silly",
		format: winston.format.json(),
		transports: [
			createConsole(),
			createLoki({
				labels: {
					service: "service",
				},
			}),
		],
	});
	winston.loggers.add("endpoint", {
		level: "silly",
		format: winston.format.json(),
		transports: [
			createConsole(),
			createLoki({
				labels: {
					service: "endpoint",
				},
			}),
		],
	});
	winston.loggers.add("auth", {
		level: "silly",
		format: winston.format.json(),
		transports: [
			createConsole(),
			createLoki({
				labels: {
					service: "auth",
				},
			}),
		],
	});
	winston.loggers.add("query", {
		level: "silly",
		format: winston.format.json(),
		transports: [
			createLoki({
				labels: {
					service: "query",
				},
			}),
		],
	});
};

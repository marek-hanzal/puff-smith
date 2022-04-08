import {createConsole, createLoki} from "@/puff-smith/service/logger/utils";
import winston from "winston";

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

export const Logger = (id: string) => winston.loggers.get(id);

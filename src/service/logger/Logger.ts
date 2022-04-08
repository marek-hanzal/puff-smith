import {Console, Loki} from "@/puff-smith/service/logger";
import winston from "winston";

winston.loggers.add("import", {
	level: "silly",
	format: winston.format.json(),
	transports: [
		Console(),
		Loki({
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
		Console(),
		Loki({
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
		Console(),
		Loki({
			labels: {
				service: "endpoint",
			},
		}),
	],
});

export const Logger = winston.loggers.get;

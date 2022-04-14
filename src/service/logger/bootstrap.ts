import {createConsole, createLoki} from "@leight-core/server";
import winston from "winston";

const createDefaultMeta = () => ({
	labels: {
		version: process.env.NEXT_PUBLIC_VERSION,
	},
});

const createDefaultLogger = (service: string) => ({
	level: "silly",
	format: winston.format.json(),
	defaultMeta: createDefaultMeta(),
	transports: [
		createConsole(),
		createLoki({
			labels: {
				version: process.env.NEXT_PUBLIC_VERSION,
				service,
			},
		}),
	],
});

export const BootstrapLogger = () => {
	[
		"job",
		"import",
		"service",
		"endpoint",
		"auth",
		"query",
	].map(name => winston.loggers.add(name, createDefaultLogger(name)));
};

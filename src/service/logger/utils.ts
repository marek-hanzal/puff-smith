import winston from "winston";
import LokiTransport from "winston-loki";

const {transports} = winston;
const {format} = winston;

export const createConsole = () => new transports.Console({
	format: format.combine(
		format.colorize(),
		format.simple(),
	),
});

export const createLoki = (options?: Partial<ConstructorParameters<typeof LokiTransport>[0]>) => new LokiTransport({
	level: "debug",
	host: "http://127.0.0.1:3100",
	...options,
});

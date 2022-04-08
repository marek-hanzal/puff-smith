import winston from "winston";
import LokiTransport from "winston-loki";

const {transports} = winston;
const {format} = winston;

export const Console = () => new transports.Console({
	format: format.combine(
		format.colorize(),
		format.simple(),
	),
});

export const Loki = (options?: Partial<ConstructorParameters<typeof LokiTransport>[0]>) => new LokiTransport({
	level: "debug",
	host: "http://127.0.0.1:3100",
	...options,
});

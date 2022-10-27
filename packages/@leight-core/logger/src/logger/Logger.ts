import {ILogLevel}              from "@leight/logger";
import winston, {LoggerOptions} from "winston";

const {transports} = winston;
const {format}     = winston;

export interface IBootstrap {
    loggers: string[];
    version?: string;
    level?: ILogLevel;
    withLoki?: boolean;
}

export class Logger {
    static bootstrap(
        {
            loggers,
            version = process.env.NEXT_PUBLIC_BUILD || "edge",
            level = "info",
        }: IBootstrap) {
        loggers.map(name => winston.loggers.add(name, {
            level,
            format:      winston.format.json(),
            defaultMeta: {
                labels: {
                    version,
                },
            },
            transports:  [
                new transports.Console({
                    format: format.combine(
                        format.colorize(),
                        format.ms(),
                        format.simple(),
                    ),
                }),
            ],
        }));
    }

    static get(id: string, options?: LoggerOptions) {
        return winston.loggers.get(id, options);
    }
}

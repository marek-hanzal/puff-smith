import {
    createDefaultLogger,
    type ILogLevel
}              from "@leight/winston";
import winston from "winston";

export interface IBootstrapLoggerRequest {
    loggers: string[];
    version?: string;
    level?: ILogLevel;
    withLoki?: boolean;
}

export const BootstrapLogger = (
    {
        loggers,
        version = process.env.NEXT_PUBLIC_BUILD || "edge",
        level = "info",
    }: IBootstrapLoggerRequest) => {
    return loggers.map(name => winston.loggers.add(name, createDefaultLogger(name, version, level)));
};

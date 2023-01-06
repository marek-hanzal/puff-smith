import {
    createConsole,
    createDefaultMeta,
    type ILogLevel
}              from "@leight/winston";
import winston from "winston";

export const createDefaultLogger = (service: string, version: string, level: ILogLevel) => ({
    level,
    format:      winston.format.json(),
    defaultMeta: createDefaultMeta(version),
    transports:  [
        createConsole(),
    ],
});

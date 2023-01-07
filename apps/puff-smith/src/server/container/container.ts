import {env}          from "@/puff-smith/env/server.mjs";
import {PrismaClient} from "@prisma/client";
import {Container}    from "inversify";

export const container = new Container();

export const ContainerSymbol = {
    PrismaClient: Symbol.for("PrismaClient"),
};

container.bind<PrismaClient>(ContainerSymbol.PrismaClient).toFactory(() => {
    return new PrismaClient({
        errorFormat: "pretty",
        log:         env.NODE_ENV === "development" ? [
            "query",
            "error",
            "warn"
        ] : ["error"],
    });
});

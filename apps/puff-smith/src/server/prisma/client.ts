import {env}          from "@/puff-smith/env/server.mjs";
import {container}    from "@/puff-smith/server/container/container";
import {PrismaClient} from "@prisma/client";

declare global {
    // eslint-disable-next-line no-var
    var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma ||
    new PrismaClient({
        errorFormat: "pretty",
        log:
                     env.NODE_ENV === "development" ? [
                         "query",
                         "error",
                         "warn"
                     ] : ["error"],
    });

if (env.NODE_ENV !== "production") {
    global.prisma = prisma;
}

export const $PrismaClient = Symbol.for("PrismaClient");

container.bind<typeof prisma>($PrismaClient).to(prisma);

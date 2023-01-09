import {env}          from "@/puff-smith/env/server.mjs";
import {PrismaClient} from "@prisma/client";
import "reflect-metadata";
import {
    container,
    injectable,
    instanceCachingFactory
}                     from "tsyringe";

container.register<PrismaClient>(PrismaClient, {
    useFactory: instanceCachingFactory<PrismaClient>(() => {
        console.log("Creating Prisma");
        return new PrismaClient({
            errorFormat: "pretty",
            log:         env.NODE_ENV === "development" ? [
                "query",
                "error",
                "warn"
            ] : ["error"],
        });
    }),
});

@injectable()
export class Foo {
    constructor(public prisma: PrismaClient) {
    }

    aaa(): boolean {
        return false;
    }
}

@injectable()
export class Bar {
    constructor(public foo: Foo) {
    }

    bbb(): boolean {
        return true;
    }
}

export {container} from "tsyringe";

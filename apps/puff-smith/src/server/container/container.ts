import {env}          from "@/puff-smith/env/server.mjs";
import {PrismaClient} from "@prisma/client";
import "reflect-metadata";
import {
    container,
    inject,
    injectable,
    instanceCachingFactory
}                     from "tsyringe";

export const ContainerSymbol = {
    PrismaClient: Symbol.for("Container.PrismaClient"),
    Foo:          Symbol.for("Container.Foo"),
    Bar:          Symbol.for("Container.Bar"),
};

container.register<PrismaClient>(ContainerSymbol.PrismaClient, {
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
    aaa(): boolean {
        return false;
    }
}

@injectable()
export class Bar {
    constructor(@inject(ContainerSymbol.Foo) public foo: Foo) {
    }

    bbb(): boolean {
        return true;
    }
}

container.register<Foo>(ContainerSymbol.Foo, Foo);
container.register<Bar>(ContainerSymbol.Bar, Bar);

export {container} from "tsyringe";

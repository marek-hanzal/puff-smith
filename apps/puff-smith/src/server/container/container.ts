import {env}          from "@/puff-smith/env/server.mjs";
import {PrismaClient} from "@prisma/client";
import {Container}    from "inversify";

export const container = new Container();

export const ContainerSymbol = {
    PrismaClient: Symbol.for("Container.PrismaClient"),
    Foo:          Symbol.for("Container.Foo"),
};

container.bind<PrismaClient>(ContainerSymbol.PrismaClient).toFactory(() => () => {
    return new PrismaClient({
        errorFormat: "pretty",
        log:         env.NODE_ENV === "development" ? [
            "query",
            "error",
            "warn"
        ] : ["error"],
    });
});

export class Foo {
    aaa(): boolean {
        return false;
    }
}

export class Bar {
    bbb(): boolean {
        return false;
    }
}

container.bind<Foo>(ContainerSymbol.Foo).toDynamicValue(() => new Foo()).inSingletonScope();

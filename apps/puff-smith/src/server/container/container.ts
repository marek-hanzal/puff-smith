import {
    $PrismaClient,
    prisma
}                  from "@/puff-smith/server/prisma/client";
import {Container} from "inversify";

export const container = new Container();

container.bind<typeof prisma>($PrismaClient).toConstantValue(prisma);

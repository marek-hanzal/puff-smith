import type {Bar}          from "@/puff-smith/server/container/container";
import {
    container,
    ContainerSymbol
}                          from "@/puff-smith/server/container/container";
import type {PrismaClient} from "@prisma/client";
import {
    type NextApiRequest,
    type NextApiResponse
}                          from "next";

const prisma = container.resolve<PrismaClient>(ContainerSymbol.PrismaClient);
container.resolve<PrismaClient>(ContainerSymbol.PrismaClient);

const bar = async (req: NextApiRequest, res: NextApiResponse) => {
    const bar = container.resolve<Bar>(ContainerSymbol.Bar);
    console.log("bar", bar.bbb());
    console.log("foo", bar.foo.aaa());

    // const examples = await prisma.example.findMany();
    res.status(200).json([]);
};

export default bar;

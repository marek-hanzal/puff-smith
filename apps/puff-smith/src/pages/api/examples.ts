import {
    container,
    ContainerSymbol
}                          from "@/puff-smith/server/container/container";
import type {PrismaClient} from "@prisma/client";
import {
    type NextApiRequest,
    type NextApiResponse
}                          from "next";

/**
 * @TODO this is not typed, find way how to fix this :O !!
 */
const prisma = container.get<PrismaClient>(ContainerSymbol.PrismaClient);

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
    const examples = await prisma.example.findMany();
    res.status(200).json(examples);
};

export default examples;

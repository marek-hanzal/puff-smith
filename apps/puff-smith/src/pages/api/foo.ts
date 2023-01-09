import {container}    from "@/puff-smith/server/container/container";
import {PrismaClient} from "@prisma/client";
import {
    type NextApiRequest,
    type NextApiResponse
}                     from "next";

const prisma = container.resolve(PrismaClient);

const foo = async (req: NextApiRequest, res: NextApiResponse) => {
    const examples = await prisma.example.findMany();
    res.status(200).json(examples);
};

export default foo;

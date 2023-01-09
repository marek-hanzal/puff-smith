import {
    Bar,
    container
}                     from "@/puff-smith/server/container/container";
import {PrismaClient} from "@prisma/client";
import {
    type NextApiRequest,
    type NextApiResponse
}                     from "next";

container.resolve(PrismaClient);
container.resolve(PrismaClient);

const foo = async (req: NextApiRequest, res: NextApiResponse) => {
    const bar = container.resolve<Bar>(Bar);
    console.log("bar", bar.bbb());
    console.log("foo", bar.foo.aaa());

    // const examples = await prisma.example.findMany();
    res.status(200).json([]);
};

export default foo;

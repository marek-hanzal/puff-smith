import {NextApiRequest, NextApiResponse} from "next";
import {createPrismaClient} from "@/sdk/prisma";

const prisma = createPrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json(await prisma.z_vape.findMany(req.body));
}

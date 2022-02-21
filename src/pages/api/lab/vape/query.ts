import {NextApiRequest, NextApiResponse} from "next";
import {createPrismaClient} from "@/puff-smith/prisma";

const prisma = createPrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json({});
}

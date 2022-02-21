import type {NextApiRequest, NextApiResponse} from 'next'
import {createPrismaClient} from "@/puff-smith/prisma";
import {ISession} from "@leight-core/leight";

const prisma = createPrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse<ISession | null>) => {
	res.status(200).json(null);
}

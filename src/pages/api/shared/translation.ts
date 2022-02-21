import type {NextApiRequest, NextApiResponse} from 'next'
import {createPrismaClient} from "@/sdk/prisma";
import {ITranslations} from "@leight-core/leight/dist";

const prisma = createPrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse<ITranslations>) => {
	res.status(200).json({
		translations: [],
	});
}

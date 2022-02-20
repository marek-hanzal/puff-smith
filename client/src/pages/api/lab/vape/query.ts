import {NextApiRequest, NextApiResponse} from "next";
import {createPrismaClient} from "@/sdk/prisma";
import {IQueryApiResponse} from "@/puff-smith/api/lab/vape";

const prisma = createPrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse<IQueryApiResponse<any>>) => {
	res.status(200).json(await prisma.z_vape.findMany(req.body));
}

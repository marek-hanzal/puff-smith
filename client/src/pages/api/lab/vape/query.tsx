import {PrismaClient} from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json((await prisma.z_vape.findMany({
		where: {
			z_build: {
				z_atomizer: {
					name: 'APEX RDA'
				}
			}
		},
		include: {
			z_build: {
				include: {
					z_atomizer: true
				}
			},
		}
	})).map(vape => vape))
}

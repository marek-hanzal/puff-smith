import type {NextApiRequest, NextApiResponse} from 'next'
import {TranslationsDto} from "@/sdk/edde/translation/dto";
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse<TranslationsDto>) => {
	res.status(200).json({
		translations: (await prisma.z_translation.findMany()).map(({id, translation, key, locale}) => ({
			id,
			language: locale,
			namespace: 'translation',
			label: key,
			text: translation,
		})),
	})
}

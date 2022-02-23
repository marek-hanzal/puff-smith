import {createPrismaClient} from "@/puff-smith/prisma";
import {IEndpoint, ITranslations} from "@leight-core/leight";

const prisma = createPrismaClient();

export const TranslationEndpoint: IEndpoint<void, ITranslations> = async (req, res) => {
	res.status(200).json({
		translations: [],
	});
}

export default TranslationEndpoint;

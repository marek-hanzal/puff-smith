import {ListEndpoint} from "@leight-core/server";
import {ITranslation, ITranslationBundle} from "@leight-core/api";
import prismaClient from "@/puff-smith/service/prisma";

export default ListEndpoint<"Translations", ITranslationBundle>(async () => {
	return {
		bundles: [
			{
				language: 'cs',
				translations: (await prismaClient.translation.findMany({
					where: {
						language: 'cs',
					}
				})).map<ITranslation>(item => ({
					key: item.label,
					value: item.text,
				})),
			}
		],
	};
});


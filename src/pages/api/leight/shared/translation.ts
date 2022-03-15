import {ListEndpoint} from "@leight-core/server";
import {ITranslationBundle} from "@leight-core/api";
import prismaClient from "@/puff-smith/service/prisma";
import {translationListMapper} from "@/puff-smith/service/translation";

export default ListEndpoint<"Translations", ITranslationBundle>(async () => {
	return {
		bundles: [
			{
				language: 'cs',
				translations: (await translationListMapper(prismaClient.translation.findMany({
					where: {
						language: 'cs',
					}
				}))),
			}
		],
	};
});


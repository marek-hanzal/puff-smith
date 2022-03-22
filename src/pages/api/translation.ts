import {ListEndpoint} from "@leight-core/server";
import {ITranslationBundle} from "@leight-core/api";
import {TranslationService} from "@/puff-smith/service/translation";

export default ListEndpoint<"Translations", ITranslationBundle>(async () => {
	const translationService = TranslationService();
	return {
		bundles: [
			{
				language: 'cs',
				translations: (await translationService.query({
					filter: {
						language: 'cs',
					}
				})).items,
			}
		],
	};
});


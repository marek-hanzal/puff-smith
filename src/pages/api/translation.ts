import {TranslationService} from "@/puff-smith/service/translation";
import {ITranslationBundle} from "@leight-core/api";
import {ListEndpoint} from "@leight-core/server";

export default ListEndpoint<"Translations", ITranslationBundle>(async () => {
	const translationService = TranslationService();
	return {
		bundles: [
			{
				language: "cs",
				translations: (await translationService.query({
					filter: {
						language: "cs",
					}
				})).items,
			}
		],
	};
});


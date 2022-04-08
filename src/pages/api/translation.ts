import {Logger} from "@/puff-smith/service/logger";
import {TranslationService} from "@/puff-smith/service/translation";
import {ITranslationBundle} from "@leight-core/api";
import {ListEndpoint} from "@leight-core/server";

export default ListEndpoint<"Translations", ITranslationBundle>(async () => {
	Logger("endpoint").info("Translations", {labels: {"endpoint": "Translations"}});
	return ({
		bundles: [
			{
				language: "cs",
				translations: (await TranslationService().query({
					filter: {
						language: "cs",
					}
				})).items,
			}
		],
	});
});


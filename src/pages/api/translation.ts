import {ofParams} from "@/puff-smith/service";
import {TranslationRepository} from "@/puff-smith/service/translation/TranslationRepository";
import {ITranslationBundle} from "@leight-core/api";
import {ListEndpoint} from "@leight-core/server";

export default ListEndpoint<"Translation", ITranslationBundle>(async params => ({
	bundles: [
		{
			language: "cs",
			translations: (await TranslationRepository(ofParams(params)).query({
				filter: {
					language: "cs",
				}
			})).items,
		}
	],
}));


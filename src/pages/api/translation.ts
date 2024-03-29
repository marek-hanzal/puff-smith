import {TranslationSource} from "@/puff-smith/service/translation/TranslationSource";
import {ITranslationBundle} from "@leight-core/api";
import {ListEndpoint} from "@leight-core/server";

export default ListEndpoint<"Translation", ITranslationBundle>({
	handler: async ({user}) => {
		const translationSource = TranslationSource().withUser(user);
		return {
			bundles: [
				{
					language: "cs",
					translations: (await translationSource.list(translationSource.query({
						filter: {
							language: "cs",
						}
					}))),
				}
			],
		};
	},
});

import {TranslationSource} from "@/puff-smith/service/translation/TranslationSource";
import {ITranslationBundle} from "@leight-core/api";
import {ListEndpoint} from "@leight-core/server";

export default ListEndpoint<"Translation", ITranslationBundle>(async ({user}) => {
	const translationSource = TranslationSource().withUser(user);
	return {
		bundles: [
			{
				language: "cs",
				translations: (await translationSource.mapper.list(translationSource.query({
					filter: {
						language: "cs",
					}
				}))),
			}
		],
	};
});

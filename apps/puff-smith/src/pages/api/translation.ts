import {asyncContainer}    from "@/puff-smith/service/Container";
import {TranslationSource} from "@/puff-smith/service/translation/TranslationSource";
import {ListEndpoint}      from "@leight-core/viv";

export default ListEndpoint({
	name:      "Translation",
	container: asyncContainer,
	handler:   async ({container}) => {
		const translationSource = TranslationSource().withContainer(container);
		return {
			bundles: [
				{
					language:     "cs",
					translations: (await translationSource.mapper.toItem.list(translationSource.query({
						filter: {
							language: "cs",
						}
					}))),
				}
			],
		};
	},
});

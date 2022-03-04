import {ListEndpoint} from "@leight-core/server";
import {ITranslationBundle} from "@leight-core/api";

export default ListEndpoint<"Translations", ITranslationBundle>(async () => {
	return {
		bundles: [
			{
				language: 'cs',
				translations: [],
			}
		],
	};
});


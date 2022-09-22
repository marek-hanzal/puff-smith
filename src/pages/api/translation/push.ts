import {ITranslationCreate} from "@/puff-smith/service/translation/interface";
import {TranslationSource} from "@/puff-smith/service/translation/TranslationSource";
import {ITranslation} from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"TranslationPush", ITranslationCreate, ITranslation>({
	handler: async ({request}) => {
		const translationSource = TranslationSource();
		return translationSource.map(await translationSource.import(request));
	}
});

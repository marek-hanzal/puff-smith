import {ITranslationSource} from "@/puff-smith/service/translation/interface";
import {TranslationSource}  from "@/puff-smith/service/translation/TranslationSource";
import {DeleteEndpoint}     from "@leight-core/server";

export default DeleteEndpoint<"TranslationDelete", ITranslationSource>({
	source: TranslationSource,
});

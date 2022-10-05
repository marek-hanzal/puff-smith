import {ITranslationSource} from "@/puff-smith/service/translation/interface";
import {TranslationSource}  from "@/puff-smith/service/translation/TranslationSource";
import {CreateEndpoint}     from "@leight-core/server";

export default CreateEndpoint<"TranslationCreate", ITranslationSource>({
	source: TranslationSource,
});

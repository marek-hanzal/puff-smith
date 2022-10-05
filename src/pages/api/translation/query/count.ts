import {ITranslationSource} from "@/puff-smith/service/translation/interface";
import {TranslationSource}  from "@/puff-smith/service/translation/TranslationSource";
import {CountEndpoint}      from "@leight-core/server";

export default CountEndpoint<"TranslationCount", ITranslationSource>({
	source: TranslationSource,
});

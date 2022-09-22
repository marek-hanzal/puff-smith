import {ITranslationSource} from "@/puff-smith/service/translation/interface";
import {TranslationSource} from "@/puff-smith/service/translation/TranslationSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Translation", ITranslationSource>({
	source: TranslationSource,
});

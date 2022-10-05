import {ITranslationSource} from "@/puff-smith/service/translation/interface";
import {TranslationSource}  from "@/puff-smith/service/translation/TranslationSource";
import {PatchEndpoint}      from "@leight-core/server";

export default PatchEndpoint<"TranslationPatch", ITranslationSource>({
	source: TranslationSource,
});

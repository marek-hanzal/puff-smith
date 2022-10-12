import {asyncContainer}    from "@/puff-smith/service/Container";
import {TranslationSource} from "@/puff-smith/service/translation/TranslationSource";
import {PatchEndpoint}     from "@leight-core/server";

export default PatchEndpoint({
	name:      "TranslationPatch",
	container: asyncContainer,
	source:    TranslationSource,
});

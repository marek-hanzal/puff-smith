import {asyncContainer}    from "@/puff-smith/service/Container";
import {TranslationSource} from "@/puff-smith/service/translation/TranslationSource";
import {CountEndpoint}     from "@leight-core/server";

export default CountEndpoint({
	name:      "TranslationCount",
	container: asyncContainer,
	source:    TranslationSource,
});

import {asyncContainer}    from "@/puff-smith/service/Container";
import {TranslationSource} from "@/puff-smith/service/translation/TranslationSource";
import {QueryEndpoint}     from "@leight-core/server";

export default QueryEndpoint({
	name:      "Translation",
	container: asyncContainer,
	source:    TranslationSource,
});

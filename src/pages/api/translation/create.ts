import {asyncContainer}    from "@/puff-smith/service/Container";
import {TranslationSource} from "@/puff-smith/service/translation/TranslationSource";
import {CreateEndpoint}    from "@leight-core/server";

export default CreateEndpoint({
	name:      "TranslationCreate",
	container: asyncContainer,
	source:    TranslationSource,
});

import {asyncContainer}    from "@/puff-smith/service/Container";
import {TranslationSource} from "@/puff-smith/service/translation/TranslationSource";
import {DeleteEndpoint}    from "@leight-core/viv";

export default DeleteEndpoint({
	name:      "TranslationDelete",
	container: asyncContainer,
	source:    TranslationSource,
});

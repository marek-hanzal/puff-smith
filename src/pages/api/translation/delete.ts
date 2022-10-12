import {ContainerPromise}  from "@/puff-smith/service/Container";
import {TranslationSource} from "@/puff-smith/service/translation/TranslationSource";
import {DeleteEndpoint}    from "@leight-core/server";

export default DeleteEndpoint({
	name:      "TranslationDelete",
	container: ContainerPromise,
	source:    TranslationSource,
});

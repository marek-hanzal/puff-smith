import {ContainerPromise}  from "@/puff-smith/service/Container";
import {TranslationSource} from "@/puff-smith/service/translation/TranslationSource";
import {QueryEndpoint}     from "@leight-core/server";

export default QueryEndpoint({
	name:      "Translation",
	container: ContainerPromise,
	source:    TranslationSource,
});

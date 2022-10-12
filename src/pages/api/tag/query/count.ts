import {ContainerPromise} from "@/puff-smith/service/Container";
import {TagSource}        from "@/puff-smith/service/tag/TagSource";
import {CountEndpoint}    from "@leight-core/server";

export default CountEndpoint({
	name:      "TagCount",
	container: ContainerPromise,
	source:    TagSource,
});

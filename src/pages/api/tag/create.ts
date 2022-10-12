import {ContainerPromise} from "@/puff-smith/service/Container";
import {TagSource}        from "@/puff-smith/service/tag/TagSource";
import {CreateEndpoint}   from "@leight-core/server";

export default CreateEndpoint({
	name:      "TagCreate",
	container: ContainerPromise,
	source:    TagSource,
});

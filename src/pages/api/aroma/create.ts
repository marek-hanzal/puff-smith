import {AromaSource}      from "@/puff-smith/service/aroma/AromaSource";
import {ContainerPromise} from "@/puff-smith/service/Container";
import {CreateEndpoint}   from "@leight-core/server";

export default CreateEndpoint({
	name:      "AromaCreate",
	container: ContainerPromise,
	source:    AromaSource,
});

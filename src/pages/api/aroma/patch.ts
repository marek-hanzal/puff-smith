import {AromaSource}      from "@/puff-smith/service/aroma/AromaSource";
import {ContainerPromise} from "@/puff-smith/service/Container";
import {PatchEndpoint}    from "@leight-core/server";

export default PatchEndpoint({
	name:      "AromaPatch",
	container: ContainerPromise,
	source:    AromaSource,
});

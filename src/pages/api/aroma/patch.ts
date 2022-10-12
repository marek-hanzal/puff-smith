import {AromaSource}    from "@/puff-smith/service/aroma/AromaSource";
import {asyncContainer} from "@/puff-smith/service/Container";
import {PatchEndpoint}  from "@leight-core/server";

export default PatchEndpoint({
	name:      "AromaPatch",
	container: asyncContainer,
	source:    AromaSource,
});

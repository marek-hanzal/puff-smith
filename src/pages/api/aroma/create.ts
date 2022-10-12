import {AromaSource}    from "@/puff-smith/service/aroma/AromaSource";
import {asyncContainer} from "@/puff-smith/service/Container";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint({
	name:      "AromaCreate",
	container: asyncContainer,
	source:    AromaSource,
});

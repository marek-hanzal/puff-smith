import {AromaSource}    from "@/puff-smith/service/aroma/AromaSource";
import {asyncContainer} from "@/puff-smith/service/Container";
import {DeleteEndpoint} from "@leight-core/viv";

export default DeleteEndpoint({
	name:      "AromaDelete",
	container: asyncContainer,
	source:    AromaSource,
});

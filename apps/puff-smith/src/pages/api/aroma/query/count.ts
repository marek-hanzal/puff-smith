import {AromaSource}    from "@/puff-smith/service/aroma/AromaSource";
import {asyncContainer} from "@/puff-smith/service/Container";
import {CountEndpoint}  from "@leight-core/viv";

export default CountEndpoint({
	name:      "AromaCount",
	container: asyncContainer,
	source:    AromaSource,
});

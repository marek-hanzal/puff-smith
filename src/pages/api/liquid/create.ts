import {asyncContainer} from "@/puff-smith/service/Container";
import {LiquidSource}   from "@/puff-smith/service/liquid/LiquidSource";
import {CreateEndpoint} from "@leight-core/viv";

export default CreateEndpoint({
	name:      "LiquidCreate",
	container: asyncContainer,
	source:    LiquidSource,
});

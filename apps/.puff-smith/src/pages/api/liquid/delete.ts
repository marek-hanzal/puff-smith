import {asyncContainer} from "@/puff-smith/service/Container";
import {LiquidSource}   from "@/puff-smith/service/liquid/LiquidSource";
import {DeleteEndpoint} from "@leight-core/viv";

export default DeleteEndpoint({
	name:      "LiquidDelete",
	container: asyncContainer,
	source:    LiquidSource,
});
import {asyncContainer} from "@/puff-smith/service/Container";
import {LiquidSource}   from "@/puff-smith/service/liquid/LiquidSource";
import {PatchEndpoint}  from "@leight-core/server";

export default PatchEndpoint({
	name:      "LiquidPatch",
	container: asyncContainer,
	source:    LiquidSource,
});

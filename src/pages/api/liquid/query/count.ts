import {asyncContainer} from "@/puff-smith/service/Container";
import {LiquidSource}   from "@/puff-smith/service/liquid/LiquidSource";
import {CountEndpoint}  from "@leight-core/server";

export default CountEndpoint({
	name:      "LiquidCount",
	container: asyncContainer,
	source:    LiquidSource,
});

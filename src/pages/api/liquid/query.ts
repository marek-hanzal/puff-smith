import {ContainerPromise} from "@/puff-smith/service/Container";
import {LiquidSource}     from "@/puff-smith/service/liquid/LiquidSource";
import {QueryEndpoint}    from "@leight-core/server";

export default QueryEndpoint({
	name:      "Liquid",
	container: ContainerPromise,
	source:    LiquidSource,
});

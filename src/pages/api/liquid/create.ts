import {ContainerPromise} from "@/puff-smith/service/Container";
import {LiquidSource}     from "@/puff-smith/service/liquid/LiquidSource";
import {CreateEndpoint}   from "@leight-core/server";

export default CreateEndpoint({
	name:      "LiquidCreate",
	container: ContainerPromise,
	source:    LiquidSource,
});

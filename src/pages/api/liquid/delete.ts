import {ContainerPromise} from "@/puff-smith/service/Container";
import {LiquidSource}     from "@/puff-smith/service/liquid/LiquidSource";
import {DeleteEndpoint}   from "@leight-core/server";

export default DeleteEndpoint({
	name:      "LiquidDelete",
	container: ContainerPromise,
	source:    LiquidSource,
});

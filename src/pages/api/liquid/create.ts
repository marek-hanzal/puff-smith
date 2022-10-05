import {ILiquidSource}  from "@/puff-smith/service/liquid/interface";
import {LiquidSource}   from "@/puff-smith/service/liquid/LiquidSource";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"LiquidCreate", ILiquidSource>({
	source: LiquidSource,
});

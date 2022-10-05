import {ILiquidSource} from "@/puff-smith/service/liquid/interface";
import {LiquidSource}  from "@/puff-smith/service/liquid/LiquidSource";
import {PatchEndpoint} from "@leight-core/server";

export default PatchEndpoint<"LiquidPatch", ILiquidSource>({
	source: LiquidSource,
});

import {ILiquidSource} from "@/puff-smith/service/liquid/interface";
import {LiquidSource} from "@/puff-smith/service/liquid/LiquidSource";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", ILiquidSource>({
	source: LiquidSource,
});

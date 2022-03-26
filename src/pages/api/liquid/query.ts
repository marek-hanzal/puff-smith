import {QueryEndpoint} from "@leight-core/server";
import {ILiquid, ILiquidQuery, LiquidService} from "@/puff-smith/service/liquid";

export default QueryEndpoint<"Liquids", ILiquidQuery, ILiquid>(LiquidService().handleQuery);

import {ILiquid, ILiquidQuery, LiquidService} from "@/puff-smith/service/liquid";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Liquids", ILiquidQuery, ILiquid>(LiquidService().handleQuery);

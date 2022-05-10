import {ILiquid, ILiquidQuery} from "@/puff-smith/service/liquid/interface";
import {LiquidService} from "@/puff-smith/service/liquid/LiquidService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Liquids", ILiquidQuery, ILiquid>(LiquidService().handleQuery);

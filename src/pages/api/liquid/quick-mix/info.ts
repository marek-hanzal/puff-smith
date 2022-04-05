import {ILiquidQuickMixInfo, ILiquidQuickMixInfoRequest, LiquidService} from "@/puff-smith/service/liquid";
import {RequestEndpoint} from "@leight-core/server";

export default RequestEndpoint<"QuickMixInfo", ILiquidQuickMixInfoRequest, ILiquidQuickMixInfo>(LiquidService().handleQuickMixInfo);

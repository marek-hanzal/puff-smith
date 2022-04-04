import {RequestEndpoint} from "@leight-core/server";
import {ILiquidQuickMixInfo, ILiquidQuickMixInfoRequest, LiquidService} from "@/puff-smith/service/liquid";

export default RequestEndpoint<"QuickMixInfo", ILiquidQuickMixInfoRequest, ILiquidQuickMixInfo>(LiquidService().handleQuickMixInfo);

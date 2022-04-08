import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {ILiquidQuickMixInfo, ILiquidQuickMixInfoRequest, LiquidService} from "@/puff-smith/service/liquid";
import {RequestEndpoint} from "@leight-core/server";

ServerBootstrap();

export default RequestEndpoint<"QuickMixInfo", ILiquidQuickMixInfoRequest, ILiquidQuickMixInfo>(LiquidService().handleQuickMixInfo);

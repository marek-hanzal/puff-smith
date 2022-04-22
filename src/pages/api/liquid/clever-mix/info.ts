import {ILiquidCleverMixInfo, ILiquidCleverMixInfoRequest, LiquidService} from "@/puff-smith/service/liquid";
import {RequestEndpoint} from "@leight-core/server";

export default RequestEndpoint<"CleverMixInfo", ILiquidCleverMixInfoRequest, ILiquidCleverMixInfo>(LiquidService().handleCleverMixInfo);

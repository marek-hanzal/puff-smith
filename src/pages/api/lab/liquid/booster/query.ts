import {ILiquidBoosterSource} from "@/puff-smith/service/liquid/booster/interface";
import {LiquidBoosterSource} from "@/puff-smith/service/liquid/booster/LiquidBoosterSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Booster", ILiquidBoosterSource>(LiquidBoosterSource());

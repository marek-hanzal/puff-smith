import {BoosterMarketSource} from "@/puff-smith/service/booster/market/BoosterMarketSource";
import {IBoosterMarketSource} from "@/puff-smith/service/booster/market/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"BoosterMarketCount", IBoosterMarketSource>(BoosterMarketSource());

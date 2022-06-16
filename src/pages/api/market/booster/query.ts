import {BoosterMarketSource} from "@/puff-smith/service/booster/market/BoosterMarketSource";
import {IBoosterMarketSource} from "@/puff-smith/service/booster/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BoosterMarket", IBoosterMarketSource>(BoosterMarketSource);

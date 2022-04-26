import {BoosterMarketService} from "@/puff-smith/service/booster/market/BoosterMarketService";
import {IBoosterMarket, IBoosterMarketQuery} from "@/puff-smith/service/booster/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BoostersMarket", IBoosterMarketQuery, IBoosterMarket>(async ({request, toUserId}) => BoosterMarketService(toUserId()).query(request));

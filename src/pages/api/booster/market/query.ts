import {BoosterMarketService, IBoosterMarket, IBoosterMarketQuery} from "@/puff-smith/service/booster/market";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BoostersMarket", IBoosterMarketQuery, IBoosterMarket>(async ({request, toUserId}) => BoosterMarketService(toUserId()).query(request));

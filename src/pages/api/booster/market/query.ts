import {defaults} from "@/puff-smith/service";
import {BoosterMarketRepository} from "@/puff-smith/service/booster/market/BoosterMarketRepository";
import {IBoosterMarket, IBoosterMarketQuery} from "@/puff-smith/service/booster/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BoosterMarket", IBoosterMarketQuery, IBoosterMarket>(async ({request, toUserId}) => BoosterMarketRepository(defaults(toUserId())).query(request));

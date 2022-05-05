import {ServiceCreate} from "@/puff-smith/service";
import {BoosterMarketService} from "@/puff-smith/service/booster/market/BoosterMarketService";
import {IBoosterMarket, IBoosterMarketQuery} from "@/puff-smith/service/booster/market/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BoostersMarket", IBoosterMarketQuery, IBoosterMarket>(async ({request, toUserId}) => BoosterMarketService(ServiceCreate(toUserId())).query(request), cache);

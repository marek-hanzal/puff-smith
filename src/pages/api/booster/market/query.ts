import {ServiceCreate} from "@/puff-smith/service";
import {BoosterMarketService} from "@/puff-smith/service/booster/market/BoosterMarketService";
import {IBoosterMarket, IBoosterMarketQuery} from "@/puff-smith/service/booster/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BoosterMarket", IBoosterMarketQuery, IBoosterMarket>(async ({request, toUserId}) => BoosterMarketService(ServiceCreate(toUserId())).query(request));

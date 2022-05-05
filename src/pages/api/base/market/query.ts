import {ServiceCreate} from "@/puff-smith/service";
import {BaseMarketService} from "@/puff-smith/service/base/market/BaseMarketService";
import {IBaseMarket, IBaseMarketQuery} from "@/puff-smith/service/base/market/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BasesMarket", IBaseMarketQuery, IBaseMarket>(async ({request, toUserId}) => BaseMarketService(ServiceCreate(toUserId())).query(request), cache);

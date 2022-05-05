import {ServiceCreate} from "@/puff-smith/service";
import {AromaMarketService} from "@/puff-smith/service/aroma/market/AromaMarketService";
import {IAromaMarket, IAromaMarketQuery} from "@/puff-smith/service/aroma/market/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AromasMarket", IAromaMarketQuery, IAromaMarket>(async ({request, toUserId}) => AromaMarketService(ServiceCreate(toUserId())).query(request), cache);

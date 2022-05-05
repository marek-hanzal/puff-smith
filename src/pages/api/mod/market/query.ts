import {ServiceCreate} from "@/puff-smith/service";
import {IModMarket, IModMarketQuery} from "@/puff-smith/service/mod/market/interface";
import {ModMarketService} from "@/puff-smith/service/mod/market/ModMarketService";
import cache from "@/puff-smith/service/side-effect/cache";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"ModsMarket", IModMarketQuery, IModMarket>(async ({request, toUserId}) => ModMarketService(ServiceCreate(toUserId())).query(request), cache);

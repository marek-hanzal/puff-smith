import {defaults} from "@/puff-smith/service";
import {IModMarket, IModMarketQuery} from "@/puff-smith/service/mod/market/interface";
import {ModMarketService} from "@/puff-smith/service/mod/market/ModMarketService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"ModMarket", IModMarketQuery, IModMarket>(async ({request, toUserId}) => ModMarketService(defaults(toUserId())).query(request));

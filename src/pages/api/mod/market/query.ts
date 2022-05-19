import {defaults} from "@/puff-smith/service";
import {IModMarket, IModMarketQuery} from "@/puff-smith/service/mod/market/interface";
import {ModMarketRepository} from "@/puff-smith/service/mod/market/ModMarketRepository";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"ModMarket", IModMarketQuery, IModMarket>(async ({request, toUserId}) => ModMarketRepository(defaults(toUserId())).query(request));

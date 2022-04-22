import {IModMarket, IModMarketQuery, ModMarketService} from "@/puff-smith/service/mod/market";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"ModsMarket", IModMarketQuery, IModMarket>(async ({request, toUserId}) => ModMarketService(toUserId()).query(request));

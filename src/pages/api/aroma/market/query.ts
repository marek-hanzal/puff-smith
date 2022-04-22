import {AromaMarketService, IAromaMarket, IAromaMarketQuery} from "@/puff-smith/service/aroma/market";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AromasMarket", IAromaMarketQuery, IAromaMarket>(async ({request, toUserId}) => AromaMarketService(toUserId()).query(request));

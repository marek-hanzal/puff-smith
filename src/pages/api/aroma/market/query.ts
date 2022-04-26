import {AromaMarketService} from "@/puff-smith/service/aroma/market/AromaMarketService";
import {IAromaMarket, IAromaMarketQuery} from "@/puff-smith/service/aroma/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AromasMarket", IAromaMarketQuery, IAromaMarket>(async ({request, toUserId}) => AromaMarketService(toUserId()).query(request));

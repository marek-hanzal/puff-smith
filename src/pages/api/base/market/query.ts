import {BaseMarketService, IBaseMarket, IBaseMarketQuery} from "@/puff-smith/service/base/market";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BasesMarket", IBaseMarketQuery, IBaseMarket>(async ({request, toUserId}) => BaseMarketService(toUserId()).query(request));

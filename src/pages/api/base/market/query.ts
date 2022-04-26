import {BaseMarketService} from "@/puff-smith/service/base/market/BaseMarketService";
import {IBaseMarket, IBaseMarketQuery} from "@/puff-smith/service/base/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BasesMarket", IBaseMarketQuery, IBaseMarket>(async ({request, toUserId}) => BaseMarketService(toUserId()).query(request));

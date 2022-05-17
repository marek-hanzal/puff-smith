import {defaults} from "@/puff-smith/service";
import {BaseMarketService} from "@/puff-smith/service/base/market/BaseMarketService";
import {IBaseMarket, IBaseMarketQuery} from "@/puff-smith/service/base/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BaseMarket", IBaseMarketQuery, IBaseMarket>(async ({request, toUserId}) => BaseMarketService(defaults(toUserId())).query(request));

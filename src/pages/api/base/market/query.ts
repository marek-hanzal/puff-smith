import {defaults} from "@/puff-smith/service";
import {BaseMarketRepository} from "@/puff-smith/service/base/market/BaseMarketRepository";
import {IBaseMarket, IBaseMarketQuery} from "@/puff-smith/service/base/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BaseMarket", IBaseMarketQuery, IBaseMarket>(async ({request, toUserId}) => BaseMarketRepository(defaults(toUserId())).query(request));

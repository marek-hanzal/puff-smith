import {defaults} from "@/puff-smith/service";
import {CottonMarketRepository} from "@/puff-smith/service/cotton/market/CottonMarketRepository";
import {ICottonMarket, ICottonMarketQuery} from "@/puff-smith/service/cotton/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CottonMarket", ICottonMarketQuery, ICottonMarket>(async ({request, toUserId}) => CottonMarketRepository(defaults(toUserId())).query(request));

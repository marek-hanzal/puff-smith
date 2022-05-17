import {defaults} from "@/puff-smith/service";
import {CottonMarketService} from "@/puff-smith/service/cotton/market/CottonMarketService";
import {ICottonMarket, ICottonMarketQuery} from "@/puff-smith/service/cotton/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CottonMarket", ICottonMarketQuery, ICottonMarket>(async ({request, toUserId}) => CottonMarketService(defaults(toUserId())).query(request));

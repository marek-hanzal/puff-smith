import {CottonMarketService, ICottonMarket, ICottonMarketQuery} from "@/puff-smith/service/cotton/market";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CottonsMarket", ICottonMarketQuery, ICottonMarket>(async ({request, toUserId}) => CottonMarketService(toUserId()).query(request));

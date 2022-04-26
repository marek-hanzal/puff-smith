import {CottonMarketService} from "@/puff-smith/service/cotton/market/CottonMarketService";
import {ICottonMarket, ICottonMarketQuery} from "@/puff-smith/service/cotton/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CottonsMarket", ICottonMarketQuery, ICottonMarket>(async ({request, toUserId}) => CottonMarketService(toUserId()).query(request));

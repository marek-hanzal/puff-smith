import {defaults} from "@/puff-smith/service";
import {AtomizerMarketService} from "@/puff-smith/service/atomizer/market/AtomizerMarketService";
import {IAtomizerMarket, IAtomizerMarketQuery} from "@/puff-smith/service/atomizer/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AtomizerMarket", IAtomizerMarketQuery, IAtomizerMarket>(async ({request, toUserId}) => AtomizerMarketService(defaults(toUserId())).query(request));

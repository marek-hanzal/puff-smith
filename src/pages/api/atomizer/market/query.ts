import {defaults} from "@/puff-smith/service";
import {AtomizerMarketRepository} from "@/puff-smith/service/atomizer/market/AtomizerMarketRepository";
import {IAtomizerMarket, IAtomizerMarketQuery} from "@/puff-smith/service/atomizer/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AtomizerMarket", IAtomizerMarketQuery, IAtomizerMarket>(async ({request, toUserId}) => AtomizerMarketRepository(defaults(toUserId())).query(request));

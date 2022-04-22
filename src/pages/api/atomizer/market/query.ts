import {AtomizerMarketService, IAtomizerMarket, IAtomizerMarketQuery} from "@/puff-smith/service/atomizer/market";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AtomizersMarket", IAtomizerMarketQuery, IAtomizerMarket>(async ({request, toUserId}) => AtomizerMarketService(toUserId()).query(request));

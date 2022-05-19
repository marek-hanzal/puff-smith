import {defaults} from "@/puff-smith/service";
import {IWireMarket, IWireMarketQuery} from "@/puff-smith/service/wire/market/interface";
import {WireMarketRepository} from "@/puff-smith/service/wire/market/WireMarketRepository";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"WireMarket", IWireMarketQuery, IWireMarket>(async ({request, toUserId}) => WireMarketRepository(defaults(toUserId())).query(request));

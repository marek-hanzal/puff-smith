import {ServiceCreate} from "@/puff-smith/service";
import cache from "@/puff-smith/service/side-effect/cache";
import {IWireMarket, IWireMarketQuery} from "@/puff-smith/service/wire/market/interface";
import {WireMarketService} from "@/puff-smith/service/wire/market/WireMarketService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"WiresMarket", IWireMarketQuery, IWireMarket>(async ({request, toUserId}) => WireMarketService(ServiceCreate(toUserId())).query(request), cache);

import {ServiceCreate} from "@/puff-smith/service";
import {CellMarketService} from "@/puff-smith/service/cell/market/CellMarketService";
import {ICellMarket, ICellMarketQuery} from "@/puff-smith/service/cell/market/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CellsMarket", ICellMarketQuery, ICellMarket>(async ({request, toUserId}) => CellMarketService(ServiceCreate(toUserId())).query(request), cache);

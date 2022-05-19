import {defaults} from "@/puff-smith/service";
import {CellMarketRepository} from "@/puff-smith/service/cell/market/CellMarketRepository";
import {ICellMarket, ICellMarketQuery} from "@/puff-smith/service/cell/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CellMarket", ICellMarketQuery, ICellMarket>(async ({request, toUserId}) => CellMarketRepository(defaults(toUserId())).query(request));

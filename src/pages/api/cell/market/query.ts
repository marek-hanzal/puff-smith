import {CellMarketService, ICellMarket, ICellMarketQuery} from "@/puff-smith/service/cell/market";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CellsMarket", ICellMarketQuery, ICellMarket>(async ({request, toUserId}) => CellMarketService(toUserId()).query(request));

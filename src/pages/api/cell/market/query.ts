import {CellMarketService} from "@/puff-smith/service/cell/market/CellMarketService";
import {ICellMarket, ICellMarketQuery} from "@/puff-smith/service/cell/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CellsMarket", ICellMarketQuery, ICellMarket>(async ({request, toUserId}) => CellMarketService(toUserId()).query(request));

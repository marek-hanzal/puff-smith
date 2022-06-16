import {CellMarketSource} from "@/puff-smith/service/cell/market/CellMarketSource";
import {ICellMarketSource} from "@/puff-smith/service/cell/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CellMarket", ICellMarketSource>(CellMarketSource);

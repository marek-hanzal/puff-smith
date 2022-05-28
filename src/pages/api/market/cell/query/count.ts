import {CellMarketSource} from "@/puff-smith/service/cell/market/CellMarketSource";
import {ICellMarketSource} from "@/puff-smith/service/cell/market/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"CellMarketCount", ICellMarketSource>(CellMarketSource());

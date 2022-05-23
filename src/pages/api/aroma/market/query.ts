import {AromaMarketSource, IAromaMarketSource} from "@/puff-smith/service/aroma/market/AromaMarketSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AromaMarket", IAromaMarketSource>(AromaMarketSource());

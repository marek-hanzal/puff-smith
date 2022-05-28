import {AromaMarketSource} from "@/puff-smith/service/aroma/market/AromaMarketSource";
import {IAromaMarketSource} from "@/puff-smith/service/aroma/market/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"AromaMarket", IAromaMarketSource>(AromaMarketSource());

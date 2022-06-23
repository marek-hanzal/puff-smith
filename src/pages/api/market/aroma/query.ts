import {AromaMarketSource} from "@/puff-smith/service/aroma/market/AromaMarketSource";
import {IAromaMarketSource} from "@/puff-smith/service/aroma/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AromaMarket", IAromaMarketSource>({
	source: AromaMarketSource,
});

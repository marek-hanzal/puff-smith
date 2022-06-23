import {CottonMarketSource} from "@/puff-smith/service/cotton/market/CottonMarketSource";
import {ICottonMarketSource} from "@/puff-smith/service/cotton/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"CottonMarket", ICottonMarketSource>({
	source: CottonMarketSource,
});

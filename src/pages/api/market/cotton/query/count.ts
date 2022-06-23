import {CottonMarketSource} from "@/puff-smith/service/cotton/market/CottonMarketSource";
import {ICottonMarketSource} from "@/puff-smith/service/cotton/market/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"CottonMarketCount", ICottonMarketSource>({
	source: CottonMarketSource,
});

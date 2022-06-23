import {IWireMarketSource} from "@/puff-smith/service/wire/market/interface";
import {WireMarketSource} from "@/puff-smith/service/wire/market/WireMarketSource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"WireMarketCount", IWireMarketSource>({
	source: WireMarketSource,
});

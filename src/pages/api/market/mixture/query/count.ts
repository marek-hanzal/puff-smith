import {IMixtureMarketSource} from "@/puff-smith/service/mixture/market/interface";
import {MixtureMarketSource} from "@/puff-smith/service/mixture/market/MixtureMarketSource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"MixtureMarketCount", IMixtureMarketSource>({
	source: MixtureMarketSource,
});

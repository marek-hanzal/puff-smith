import {AtomizerMarketSource} from "@/puff-smith/service/atomizer/market/AtomizerMarketSource";
import {IAtomizerMarketSource} from "@/puff-smith/service/atomizer/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AtomizerMarket", IAtomizerMarketSource>({
	source: AtomizerMarketSource,
});

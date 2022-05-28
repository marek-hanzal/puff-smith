import {AtomizerMarketSource} from "@/puff-smith/service/atomizer/market/AtomizerMarketSource";
import {IAtomizerMarketSource} from "@/puff-smith/service/atomizer/market/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"AtomizerMarketCount", IAtomizerMarketSource>(AtomizerMarketSource());

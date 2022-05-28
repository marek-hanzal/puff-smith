import {IModMarketSource} from "@/puff-smith/service/mod/market/interface";
import {ModMarketSource} from "@/puff-smith/service/mod/market/ModMarketSource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"ModMarketCount", IModMarketSource>(ModMarketSource());

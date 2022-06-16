import {IModMarketSource} from "@/puff-smith/service/mod/market/interface";
import {ModMarketSource} from "@/puff-smith/service/mod/market/ModMarketSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"ModMarket", IModMarketSource>(ModMarketSource);

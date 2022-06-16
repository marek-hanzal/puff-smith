import {IMixtureMarketSource} from "@/puff-smith/service/mixture/market/interface";
import {MixtureMarketSource} from "@/puff-smith/service/mixture/market/MixtureMarketSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"MixtureMarket", IMixtureMarketSource>(MixtureMarketSource);

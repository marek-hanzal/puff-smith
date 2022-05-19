import {ofParams} from "@/puff-smith/service";
import {IMixtureMarket, IMixtureMarketQuery} from "@/puff-smith/service/mixture/market/interface";
import {MixtureMarketRepository} from "@/puff-smith/service/mixture/market/MixtureMarketRepository";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"MixtureMarket", IMixtureMarketQuery, IMixtureMarket>(async params => MixtureMarketRepository(ofParams(params)).handleQuery(params));

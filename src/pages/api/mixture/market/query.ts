import {ofRequest} from "@/puff-smith/service";
import {IMixtureMarket, IMixtureMarketQuery} from "@/puff-smith/service/mixture/market/interface";
import {MixtureMarketService} from "@/puff-smith/service/mixture/market/MixtureMarketService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"MixtureMarket", IMixtureMarketQuery, IMixtureMarket>(async params => MixtureMarketService(ofRequest(params)).handleQuery(params));

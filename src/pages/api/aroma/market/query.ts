import {ofParams} from "@/puff-smith/service";
import {AromaMarketRepository} from "@/puff-smith/service/aroma/market/AromaMarketRepository";
import {IAromaMarket, IAromaMarketQuery} from "@/puff-smith/service/aroma/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AromaMarket", IAromaMarketQuery, IAromaMarket>(async params => AromaMarketRepository(ofParams(params)).handleQuery(params));

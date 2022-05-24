import {BaseMarketSource} from "@/puff-smith/service/base/market/BaseMarketSource";
import {IBaseMarketSource} from "@/puff-smith/service/base/market/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BaseMarket", IBaseMarketSource>(BaseMarketSource());

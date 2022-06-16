import {BaseMarketSource} from "@/puff-smith/service/base/market/BaseMarketSource";
import {IBaseMarketSource} from "@/puff-smith/service/base/market/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"BaseMarketCount", IBaseMarketSource>(BaseMarketSource);

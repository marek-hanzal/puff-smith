import {IWireMarketSource} from "@/puff-smith/service/wire/market/interface";
import {WireMarketSource} from "@/puff-smith/service/wire/market/WireMarketSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"WireMarket", IWireMarketSource>(WireMarketSource);

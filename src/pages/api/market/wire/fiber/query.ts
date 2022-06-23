import {IWireFiberSource} from "@/puff-smith/service/wire/market/fiber/interface";
import {WireFiberSource} from "@/puff-smith/service/wire/market/fiber/WireFiberSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"WireFiber", IWireFiberSource>({
	source: WireFiberSource,
});

import {IWireFiberSource} from "@/puff-smith/service/wire/fiber/interface";
import {WireFiberSource} from "@/puff-smith/service/wire/fiber/WireFiberSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"WireFiber", IWireFiberSource>({
	source: WireFiberSource,
});

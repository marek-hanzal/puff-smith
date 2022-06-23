import {BoosterNicotineSource} from "@/puff-smith/service/booster/inventory/nicotine/BoosterNicotineSource";
import {IBoosterNicotineSource} from "@/puff-smith/service/booster/nicotine/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Nicotine", IBoosterNicotineSource>({
	source: BoosterNicotineSource,
});

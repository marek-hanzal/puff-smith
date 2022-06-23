import {BoosterRatioSource} from "@/puff-smith/service/booster/inventory/ratio/BoosterRatioSource";
import {IBoosterRatioSource} from "@/puff-smith/service/booster/ratio/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Ratio", IBoosterRatioSource>({
	source: BoosterRatioSource,
});

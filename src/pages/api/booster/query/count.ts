import {BoosterSource} from "@/puff-smith/service/booster/BoosterSource";
import {IBoosterSource} from "@/puff-smith/service/booster/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"BoosterCount", IBoosterSource>({
	source: BoosterSource,
});

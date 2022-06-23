import {IMixtureBoosterSource} from "@/puff-smith/service/mixture/booster/interface";
import {MixtureBoosterSource} from "@/puff-smith/service/mixture/booster/MixtureBoosterSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Booster", IMixtureBoosterSource>({
	source: MixtureBoosterSource,
});

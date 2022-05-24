import {IMixtureBoosterSource} from "@/puff-smith/service/mixture/inventory/booster/interface";
import {MixtureBoosterSource} from "@/puff-smith/service/mixture/inventory/booster/MixtureBoosterSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Booster", IMixtureBoosterSource>(MixtureBoosterSource());

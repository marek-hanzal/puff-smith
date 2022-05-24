import {BoosterSource} from "@/puff-smith/service/booster/BoosterSource";
import {IBoosterSource} from "@/puff-smith/service/booster/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Booster", IBoosterSource>(BoosterSource());

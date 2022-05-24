import {BoosterRatioSource} from "@/puff-smith/service/booster/ratio/BoosterRatioSource";
import {IBoosterRatioSource} from "@/puff-smith/service/booster/ratio/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Ratio", IBoosterRatioSource>(BoosterRatioSource());

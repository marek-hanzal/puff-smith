import {BoosterService} from "@/puff-smith/service/booster/BoosterService";
import {IBooster, IBoosterQuery} from "@/puff-smith/service/booster/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Boosters", IBoosterQuery, IBooster>(BoosterService().handleQuery, cache);

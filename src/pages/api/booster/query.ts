import {BoosterService, IBooster, IBoosterQuery} from "@/puff-smith/service/booster";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Boosters", IBoosterQuery, IBooster>(BoosterService().handleQuery);

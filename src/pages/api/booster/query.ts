import {QueryEndpoint} from "@leight-core/server";
import {BoosterService, IBooster, IBoosterQuery} from "@/puff-smith/service/booster";

export default QueryEndpoint<"Boosters", IBoosterQuery, IBooster>(BoosterService().handleQuery);

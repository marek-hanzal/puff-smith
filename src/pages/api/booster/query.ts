import {BoosterService, IBooster, IBoosterQuery} from "@/puff-smith/service/booster";
import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"Boosters", IBoosterQuery, IBooster>(BoosterService().handleQuery);

import {ofParams} from "@/puff-smith/service";
import {BoosterRepository} from "@/puff-smith/service/booster/BoosterRepository";
import {IBooster, IBoosterQuery} from "@/puff-smith/service/booster/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Booster", IBoosterQuery, IBooster>(async params => BoosterRepository(ofParams(params)).handleQuery(params));

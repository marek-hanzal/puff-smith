import {ofRequest} from "@/puff-smith/service";
import {BoosterService} from "@/puff-smith/service/booster/BoosterService";
import {IBooster, IBoosterQuery} from "@/puff-smith/service/booster/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Booster", IBoosterQuery, IBooster>(async params => BoosterService(ofRequest(params)).handleQuery(params));

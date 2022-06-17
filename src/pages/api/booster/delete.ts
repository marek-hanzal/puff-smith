import {BoosterSource} from "@/puff-smith/service/booster/BoosterSource";
import {IBoosterSource} from "@/puff-smith/service/booster/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IBoosterSource>(BoosterSource);

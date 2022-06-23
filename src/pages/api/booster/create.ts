import {BoosterSource} from "@/puff-smith/service/booster/BoosterSource";
import {IBoosterSource} from "@/puff-smith/service/booster/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IBoosterSource>({
	source: BoosterSource,
});

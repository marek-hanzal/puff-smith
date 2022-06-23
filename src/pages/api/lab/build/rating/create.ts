import {BuildLiquidRatingSource} from "@/puff-smith/service/build/liquid/rating/BuildLiquidRatingSource";
import {IBuildLiquidRatingSource} from "@/puff-smith/service/build/liquid/rating/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IBuildLiquidRatingSource>({
	source: BuildLiquidRatingSource,
});

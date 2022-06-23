import {BuildLiquidTasteRatingSource} from "@/puff-smith/service/build/liquid/taste/rating/BuildLiquidTasteRatingSource";
import {IBuildLiquidTasteRatingSource} from "@/puff-smith/service/build/liquid/taste/rating/interface";
import {PatchEndpoint} from "@leight-core/server";

export default PatchEndpoint<"Patch", IBuildLiquidTasteRatingSource>({
	source: BuildLiquidTasteRatingSource,
});

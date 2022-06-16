import {BuildLiquidTasteRatingSource} from "@/puff-smith/service/build/liquid/taste/rating/BuildLiquidTasteRatingSource";
import {IBuildLiquidTasteRatingSource} from "@/puff-smith/service/build/liquid/taste/rating/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"BuildLiquidTasteRatingCount", IBuildLiquidTasteRatingSource>(BuildLiquidTasteRatingSource);

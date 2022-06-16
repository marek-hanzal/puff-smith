import {BuildLiquidTasteRatingSource} from "@/puff-smith/service/build/liquid/taste/rating/BuildLiquidTasteRatingSource";
import {IBuildLiquidTasteRatingSource} from "@/puff-smith/service/build/liquid/taste/rating/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"BuildLiquidTasteRating", IBuildLiquidTasteRatingSource>(BuildLiquidTasteRatingSource);

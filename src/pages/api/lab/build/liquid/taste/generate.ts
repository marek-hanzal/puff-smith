import {BuildLiquidTasteRatingSource} from "@/puff-smith/service/build/liquid/taste/rating/BuildLiquidTasteRatingSource";
import {IBuildLiquidTasteRatingGenerate} from "@/puff-smith/service/build/liquid/taste/rating/interface";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"BuildTasteGenerate", IBuildLiquidTasteRatingGenerate, any>(async ({request, user}) => BuildLiquidTasteRatingSource().withUser(user).generateFor(request));

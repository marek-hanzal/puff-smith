import {BuildLiquidTasteRatingSource} from "@/puff-smith/service/build/liquid/taste/rating/BuildLiquidTasteRatingSource";
import {IBuildLiquidTasteRatingGenerate} from "@/puff-smith/service/build/liquid/taste/rating/interface";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"BuildTasteGenerate", IBuildLiquidTasteRatingGenerate, boolean>(async ({request, user}) => await BuildLiquidTasteRatingSource().withUser(user).generateFor(request));

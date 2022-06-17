import {ILikeDislikeInlineProps, LikeDislikeInline} from "@/puff-smith/component/inline/LikeDislikeInline";
import {IBuildLiquidTasteRating} from "@/puff-smith/service/build/liquid/taste/rating/interface";
import {usePatchMutation} from "@/sdk/api/lab/build/liquid/taste/patch";
import {useBuildLiquidTasteRatingQueryInvalidate} from "@/sdk/api/lab/build/liquid/taste/query";
import {FC} from "react";

export interface IBuildTasteRatingButtonProps extends Partial<ILikeDislikeInlineProps> {
	taste: IBuildLiquidTasteRating;
}

export const BuildTasteRatingButton: FC<IBuildTasteRatingButtonProps> = ({taste, ...props}) => {
	const patchMutation = usePatchMutation();
	const buildLiquidTasteRatingQueryInvalidate = useBuildLiquidTasteRatingQueryInvalidate();
	return <LikeDislikeInline
		id={taste.id}
		rating={taste.rating}
		mutator={patchMutation}
		onSuccess={async () => {
			await buildLiquidTasteRatingQueryInvalidate();
		}}
		{...props}
	/>;
};

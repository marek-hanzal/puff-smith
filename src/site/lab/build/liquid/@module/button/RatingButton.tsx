import {LikeInline} from "@/puff-smith/component/inline/LikeInline";
import {IBuild} from "@/puff-smith/service/build/interface";
import {IBuildLiquid} from "@/puff-smith/service/build/liquid/interface";
import {useBuildLiquidQueryInvalidate} from "@/sdk/api/lab/build/[id]/liquid/query";
import {useCreateMutation} from "@/sdk/api/lab/build/rating/create";
import {FC} from "react";

export interface IRatingButtonProps {
	build: IBuild;
	liquid: IBuildLiquid;
}

export const RatingButton: FC<IRatingButtonProps> = ({liquid, build}) => {
	const createMutation = useCreateMutation();
	const buildLiquidQueryInvalidate = useBuildLiquidQueryInvalidate();
	return <LikeInline
		onRating={rating => {
			createMutation.mutate({
				rating,
				buildId: build.id,
				liquidId: liquid.id,
			}, {
				onSuccess: async () => {
					await buildLiquidQueryInvalidate();
				}
			});
		}}
		isLoading={createMutation.isLoading}
		disabled={!build.active}
		rating={liquid.rating?.rating}
	/>;
};

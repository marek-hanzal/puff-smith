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
		onDislike={() => {
			createMutation.mutate({
				rating: liquid.rating?.rating === -1 ? null : -1,
				buildId: build.id,
				liquidId: liquid.id,
			}, {
				onSuccess: async () => {
					await buildLiquidQueryInvalidate();
				}
			});
		}}
		onLike={() => {
			createMutation.mutate({
				rating: liquid.rating?.rating === 1 ? null : 1,
				buildId: build.id,
				liquidId: liquid.id,
			}, {
				onSuccess: async () => {
					await buildLiquidQueryInvalidate();
				}
			});
		}}
		onGodlike={() => {
			createMutation.mutate({
				rating: liquid.rating?.rating === 2 ? null : 2,
				buildId: build.id,
				liquidId: liquid.id,
			}, {
				onSuccess: async () => {
					await buildLiquidQueryInvalidate();
				}
			});
		}}
		isLoading={createMutation.isLoading}
		rating={liquid.rating?.rating}
	/>;
};

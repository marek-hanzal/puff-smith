import {LikeDislikeInline} from "@/puff-smith/component/inline/LikeDislikeInline";
import {IBuild} from "@/puff-smith/service/build/interface";
import {useBuildQueryInvalidate} from "@/sdk/api/lab/build/[id]/fetch";
import {usePatchMutation} from "@/sdk/api/lab/build/patch";
import {FC} from "react";

export interface IBuildRatingButtonProps {
	build: IBuild;
}

export const BuildRatingButton: FC<IBuildRatingButtonProps> = ({build}) => {
	const patchMutation = usePatchMutation();
	const buildQueryInvalidate = useBuildQueryInvalidate();
	return <LikeDislikeInline
		id={build.id}
		rating={build.rating}
		mutator={patchMutation}
		onSuccess={async () => {
			await buildQueryInvalidate();
		}}
	/>;
};

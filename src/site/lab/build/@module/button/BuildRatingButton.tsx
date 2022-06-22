import {LikeDislikeInline} from "@/puff-smith/component/inline/LikeDislikeInline";
import {IBuild} from "@/puff-smith/service/build/interface";
import {useBuildQueryInvalidate} from "@/sdk/api/lab/build/[id]/fetch";
import {usePatchMutation} from "@/sdk/api/lab/build/patch";
import {useBuildQueryInvalidate as useLabBuildQueryInvalidate} from "@/sdk/api/lab/build/query";
import {FC} from "react";

export interface IBuildRatingButtonProps {
	build: IBuild;
	disabled?: boolean;
}

export const BuildRatingButton: FC<IBuildRatingButtonProps> = ({build, disabled = false}) => {
	const patchMutation = usePatchMutation();
	const buildQueryInvalidate = useBuildQueryInvalidate();
	const labBuildQueryInvalidate = useLabBuildQueryInvalidate();
	return <LikeDislikeInline
		tooltip={"lab.build.rating.tooltip"}
		id={build.id}
		rating={build.rating}
		mutator={patchMutation}
		disabled={disabled || !build.active}
		onSuccess={async () => {
			await buildQueryInvalidate();
			await labBuildQueryInvalidate();
		}}
	/>;
};

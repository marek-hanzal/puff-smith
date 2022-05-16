import {IMixtureJobParams, MIXTURE_JOB} from "@/puff-smith/cli/jobs/mixture/interface";
import {IJobButtonProps, JobButton} from "@/puff-smith/component/button/JobButton";
import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {useMixtureJobMutation} from "@/sdk/api/mixture/job/mixture";
import {FC} from "react";

export interface IMixtureJobButtonProps extends Partial<IJobButtonProps<IMixtureJobParams>> {
	aroma: IAroma;
}

export const MixtureJobButton: FC<IMixtureJobButtonProps> = ({aroma, ...props}) => {
	return <JobButton<IMixtureJobParams>
		icon={<MixtureIcon/>}
		scheduler={useMixtureJobMutation()}
		schedule={{
			aromaId: aroma.id,
		}}
		filter={{
			name: MIXTURE_JOB,
			params: {
				contains: `"aromaId":"${aroma.id}"`,
				mode: "insensitive",
			}
		}}
		translation={"lab.mixture.job"}
		{...props}
	/>;
};

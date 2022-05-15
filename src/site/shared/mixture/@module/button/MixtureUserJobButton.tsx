import {IMixtureUserJobParams, MIXTURE_USER_JOB} from "@/puff-smith/cli/jobs/mixture/interface";
import {IJobButtonProps, JobButton} from "@/puff-smith/component/button/JobButton";
import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {useWhoamiQuery} from "@/sdk/api/user/whoami";
import {FC} from "react";

export interface IMixtureUserJobButtonProps extends Partial<IJobButtonProps<IMixtureUserJobParams>> {
}

export const MixtureUserJobButton: FC<IMixtureUserJobButtonProps> = props => {
	const whoamiQuery = useWhoamiQuery(undefined, undefined, {
		keepPreviousData: true,
	});
	return whoamiQuery.isSuccess ? <JobButton<IMixtureUserJobParams>
		icon={<MixtureIcon/>}
		disabled={whoamiQuery.isLoading}
		schedule={{
			params: {
				userId: whoamiQuery.data?.id,
			},
			name: MIXTURE_USER_JOB,
		}}
		filter={{
			name: MIXTURE_USER_JOB,
			userId: whoamiQuery.data?.id,
		}}
		translation={"lab.mixture.user.job"}
		{...props}
	/> : null;
};

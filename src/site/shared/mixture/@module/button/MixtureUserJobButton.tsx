import {IJobButtonProps, JobButton} from "@/puff-smith/component/button/JobButton";
import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {IMixtureUserJobParams, MIXTURE_USER_JOB} from "@/puff-smith/jobs/mixture/interface";
import {useMixtureAromaQueryInvalidate} from "@/sdk/api/inventory/mixture/aroma/query";
import {useAromaTasteQueryInvalidate} from "@/sdk/api/inventory/mixture/aroma/taste/query";
import {useBaseQueryInvalidate} from "@/sdk/api/inventory/mixture/base/query";
import {useBoosterQueryInvalidate} from "@/sdk/api/inventory/mixture/booster/query";
import {useDrawQueryInvalidate} from "@/sdk/api/inventory/mixture/draw/query";
import {useNicotineQueryInvalidate} from "@/sdk/api/inventory/mixture/nicotine/query";
import {useMixtureInventoryQueryInvalidate} from "@/sdk/api/inventory/mixture/query";
import {useRatioQueryInvalidate} from "@/sdk/api/inventory/mixture/ratio/query";
import {useVendorQueryInvalidate} from "@/sdk/api/inventory/mixture/vendor/query";
import {useMixtureUserJobMutation} from "@/sdk/api/mixture/job/mixture-user";
import {useUserContext} from "@leight-core/client";
import {FC} from "react";

export interface IMixtureUserJobButtonProps extends Partial<IJobButtonProps<IMixtureUserJobParams>> {
}

export const MixtureUserJobButton: FC<IMixtureUserJobButtonProps> = props => {
	const userContext = useUserContext();
	const mixtureUserJobMutation = useMixtureUserJobMutation();
	const mixtureInventoryQueryInvalidate = useMixtureInventoryQueryInvalidate();
	const mixtureAromaQueryInvalidate = useMixtureAromaQueryInvalidate(false);
	const boosterQueryInvalidate = useBoosterQueryInvalidate(false);
	const baseQueryInvalidate = useBaseQueryInvalidate(false);
	const ratioQueryInvalidate = useRatioQueryInvalidate(false);
	const vendorQueryInvalidate = useVendorQueryInvalidate(false);
	const drawQueryInvalidate = useDrawQueryInvalidate(false);
	const nicotineQueryInvalidate = useNicotineQueryInvalidate(false);
	const aromaTasteQueryInvalidate = useAromaTasteQueryInvalidate(false);
	return <JobButton<IMixtureUserJobParams>
		icon={<MixtureIcon/>}
		disabled={!userContext.isReady}
		scheduler={mixtureUserJobMutation}
		schedule={{
			userId: userContext.user.userId,
		}}
		filter={{
			name: MIXTURE_USER_JOB,
			userId: userContext.user.userId,
		}}
		translation={"lab.mixture.user.job"}
		onDone={async () => {
			await mixtureInventoryQueryInvalidate();
			await mixtureAromaQueryInvalidate();
			await boosterQueryInvalidate();
			await boosterQueryInvalidate();
			await baseQueryInvalidate();
			await ratioQueryInvalidate();
			await vendorQueryInvalidate();
			await drawQueryInvalidate();
			await nicotineQueryInvalidate();
			await aromaTasteQueryInvalidate();
		}}
		{...props}
	/>;
};

import {IJobButtonProps, JobButton} from "@/puff-smith/component/button/JobButton";
import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {IMixtureUserJobParams, MIXTURE_USER_JOB} from "@/puff-smith/jobs/mixture/interface";
import {useMixtureAromaQueryInvalidate} from "@/sdk/api/inventory/mixture/aroma/query";
import {useAromaTasteQueryInvalidate} from "@/sdk/api/inventory/mixture/aroma/taste/query";
import {useBaseQueryInvalidate} from "@/sdk/api/inventory/mixture/base/query";
import {useBoosterQueryInvalidate} from "@/sdk/api/inventory/mixture/booster/query";
import {useDrawQueryInvalidate} from "@/sdk/api/inventory/mixture/draw/query";
import {useNicotineQueryInvalidate} from "@/sdk/api/inventory/mixture/nicotine/query";
import {useMixtureInventoryCountQueryInvalidate, useMixtureInventoryQueryInvalidate} from "@/sdk/api/inventory/mixture/query";
import {useRatioQueryInvalidate} from "@/sdk/api/inventory/mixture/ratio/query";
import {useVendorQueryInvalidate} from "@/sdk/api/inventory/mixture/vendor/query";
import {useMixtureUserJobMutation} from "@/sdk/api/mixture/job/mixture-user";
import {useWhoamiQuery} from "@/sdk/api/user/whoami";
import {FC} from "react";

export interface IMixtureUserJobButtonProps extends Partial<IJobButtonProps<IMixtureUserJobParams>> {
}

export const MixtureUserJobButton: FC<IMixtureUserJobButtonProps> = props => {
	const whoamiQuery = useWhoamiQuery(undefined, undefined, {
		keepPreviousData: true,
	});
	const mixtureUserJobMutation = useMixtureUserJobMutation();
	const mixtureInventoryQueryInvalidate = useMixtureInventoryQueryInvalidate();
	const mixtureInventoryCountQueryInvalidate = useMixtureInventoryCountQueryInvalidate();
	const mixtureAromaQueryInvalidate = useMixtureAromaQueryInvalidate();
	const boosterQueryInvalidate = useBoosterQueryInvalidate();
	const baseQueryInvalidate = useBaseQueryInvalidate();
	const ratioQueryInvalidate = useRatioQueryInvalidate();
	const vendorQueryInvalidate = useVendorQueryInvalidate();
	const drawQueryInvalidate = useDrawQueryInvalidate();
	const nicotineQueryInvalidate = useNicotineQueryInvalidate();
	const aromaTasteQueryInvalidate = useAromaTasteQueryInvalidate();
	return whoamiQuery.isSuccess ? <JobButton<IMixtureUserJobParams>
		icon={<MixtureIcon/>}
		disabled={whoamiQuery.isLoading}
		scheduler={mixtureUserJobMutation}
		schedule={{
			userId: whoamiQuery.data?.id,
		}}
		filter={{
			name: MIXTURE_USER_JOB,
			userId: whoamiQuery.data?.id,
		}}
		translation={"lab.mixture.user.job"}
		onDone={async () => {
			await mixtureInventoryQueryInvalidate();
			await mixtureInventoryCountQueryInvalidate();
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
	/> : null;
};

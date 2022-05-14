import {MIXTURE_USER_JOB} from "@/puff-smith/cli/jobs/mixture/interface";
import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {JobAlert} from "@/puff-smith/component/job/JobAlert";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {MixtureFilter} from "@/puff-smith/site/lab/mixture/@module/filter/MixtureFilter";
import {MixtureList} from "@/puff-smith/site/lab/mixture/@module/list/MixtureList";
import {MixtureSourceControlProvider} from "@/sdk/api/mixture/inventory/mixture/query";
import {useWhoamiQuery} from "@/sdk/api/user/whoami";

export default withLabLayout(function Index() {
	const whoamiQuery = useWhoamiQuery(undefined, undefined, {
		keepPreviousData: true,
	});
	return <LabPage
		title={"lab.mixture.index"}
		menuSelection={["/lab/mixture"]}
		icon={<MixtureIcon/>}
	>
		<MixtureSourceControlProvider
			defaultSize={10}
			defaultOrderBy={[
				{aroma: {name: "asc"}},
				{mixture: {vg: "desc"}},
				{mixture: {nicotine: "asc"}},
			] as any}
		>
			<MixtureList
				header={() => <>
					<MixtureFilter/>
					{whoamiQuery.isSuccess && <JobAlert
						translation={"lab.mixture"}
						filter={{
							name: MIXTURE_USER_JOB,
							userId: whoamiQuery.data?.id,
						}}
					/>}
				</>}
			/>
		</MixtureSourceControlProvider>
	</LabPage>;
});

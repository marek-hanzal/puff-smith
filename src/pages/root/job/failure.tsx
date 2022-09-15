import {JobIcon} from "@/puff-smith/component/icon/JobIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {BrowserRootPage} from "@/puff-smith/site/root/@module/component/BrowserRootPage";
import {withRootLayout} from "@/puff-smith/site/root/@module/layout/layout";
import {JobMenu} from "@/puff-smith/site/root/job/@module/menu/JobMenu";
import {JobList} from "@/puff-smith/site/shared/job/@module/list/JobList";
import {JobProviderControl} from "@/sdk/api/job/query";
import {useParams} from "@leight-core/client";

export default withRootLayout(function Index() {
	const {name} = useParams();
	return <BrowserRootPage
		title={"root.job"}
		menuSelection={["/root/job", "/root/job/failure"]}
		icon={<JobIcon/>}
		footer={<JobMenu/>}
	>
		<JobProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			applyFilter={{
				status: {
					in: ["FAILURE"],
				},
				name,
			}}
			defaultOrderBy={[
				{
					started: "desc",
				},
				{
					created: "desc",
				},
			] as any}
		>
			<JobList
				showFilter={false}
			/>
		</JobProviderControl>
	</BrowserRootPage>;
});


import {JobIcon} from "@/puff-smith/component/icon/JobIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {BrowserRootPage} from "@/puff-smith/site/root/@module/component/BrowserRootPage";
import {MobileRootPage} from "@/puff-smith/site/root/@module/component/MobileRootPage";
import {withRootLayout} from "@/puff-smith/site/root/@module/layout/layout";
import {JobMenu} from "@/puff-smith/site/root/job/@module/menu/JobMenu";
import {JobList} from "@/puff-smith/site/shared/job/@module/list/JobList";
import {JobProviderControl} from "@/sdk/api/job/query";
import {useParams} from "@leight-core/client";

export default withRootLayout(function Index() {
	const {name} = useParams();
	return <>
		<BrowserRootPage
			title={"root.job"}
			menuSelection={["/root/job", "/root/job/all"]}
			icon={<JobIcon/>}
			footer={<JobMenu/>}
		>
			<JobProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
				applyFilter={{
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
					providerProps={{
						live: 5000,
					}}
					showCommit={false}
				/>
			</JobProviderControl>
		</BrowserRootPage>
		<MobileRootPage
			title={"root.job"}
			icon={<JobIcon/>}
			onBack={navigate => navigate("/root")}
		>
			<JobProviderControl
				defaultSize={3}
				applyFilter={{
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
					providerProps={{
						live: 5000,
					}}
					showCommit={false}
				/>
			</JobProviderControl>
		</MobileRootPage>
	</>;
});


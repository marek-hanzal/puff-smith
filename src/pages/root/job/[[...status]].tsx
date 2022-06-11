import {JobIcon} from "@/puff-smith/component/icon/JobIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {IJobQuery} from "@/puff-smith/service/job/interface";
import {RootPage} from "@/puff-smith/site/root/@module/component/RootPage";
import {withRootLayout} from "@/puff-smith/site/root/@module/layout/layout";
import {JobMenu} from "@/puff-smith/site/root/job/@module/menu/JobMenu";
import {IJobListProps, JobList} from "@/puff-smith/site/shared/job/@module/list/JobList";
import {JobProviderControl} from "@/sdk/api/job/query";
import {IJobStatus, IQueryOrderBy} from "@leight-core/api";
import {useNavigate, useParams} from "@leight-core/client";
import {message} from "antd";
import {useTranslation} from "react-i18next";

interface IJobConfig {
	filter?: IJobStatus[];
	orderBy?: IQueryOrderBy<IJobQuery>;
	listProps?: Partial<IJobListProps>;
}

interface IJobConfigObject {
	[index: string]: IJobConfig;
}

export default withRootLayout(function Index() {
	const {t} = useTranslation();
	const {status, name} = useParams();
	const navigate = useNavigate();
	const configs: IJobConfigObject = {
		"running": {
			filter: ["RUNNING", "NEW"],
			orderBy: [
				{started: "asc"},
				{created: "asc"},
			] as any,
			listProps: {
				providerProps: {
					live: 2500,
					options: {
						onSuccess: async data => {
							if (!data.length) {
								navigate("/root/job/all");
								await message.success({
									content: t("common.job.all.done"),
									key: "common.job.all.done",
								});
							}
						}
					},
				},
				disableToolbar: true,
			},
		},
		"review": {
			filter: ["REVIEW"],
			listProps: {
				providerProps: {
					live: 0,
				},
				showFilter: false,
			},
		},
		"failure": {
			filter: ["FAILURE"],
			listProps: {
				providerProps: {
					live: 0,
				},
				showFilter: false,
			},
		},
		"success": {
			filter: ["SUCCESS"],
			listProps: {
				providerProps: {
					live: 0,
				},
				showFilter: false,
			},
		},
		"done": {
			filter: ["DONE"],
			listProps: {
				providerProps: {
					live: 0,
				},
				showFilter: false,
				showCommit: false,
			},
		},
		"all": {
			filter: undefined,
			listProps: {
				providerProps: {
					live: 5000,
				},
				showCommit: false,
			},
		},
	};
	const config = configs[status || "running"];
	return <RootPage
		title={"root.job"}
		menuSelection={["/root/job", "/root/job/" + (status || "running")]}
		icon={<JobIcon/>}
		headerProps={{
			footer: <JobMenu/>,
		}}
	>
		<JobProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			applyFilter={{
				status: config.filter && {
					in: config.filter,
				},
				name,
			}}
			defaultOrderBy={config.orderBy || [
				{
					started: "desc",
				},
				{
					created: "desc",
				},
			] as any}
		>
			<JobList {...config.listProps}/>
		</JobProviderControl>
	</RootPage>;
});


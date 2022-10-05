import {JobIcon}            from "@/puff-smith/component/icon/JobIcon";
import {DEFAULT_LIST_SIZE}  from "@/puff-smith/component/misc";
import {IJobQuery}          from "@/puff-smith/service/job/interface";
import {BrowserRootPage}    from "@/puff-smith/site/root/@module/component/BrowserRootPage";
import {MobileRootPage}     from "@/puff-smith/site/root/@module/component/MobileRootPage";
import {withRootLayout}     from "@/puff-smith/site/root/@module/layout/layout";
import {JobMenu}            from "@/puff-smith/site/root/job/@module/menu/JobMenu";
import {
	IJobListProps,
	JobList
}                           from "@/puff-smith/site/shared/job/@module/list/JobList";
import {JobProviderControl} from "@/sdk/api/job/query";
import {
	IJobStatus,
	IQueryOrderBy
}                           from "@leight-core/api";
import {
	useNavigate,
	useParams
}                           from "@leight-core/client";
import {message}            from "antd";
import {useTranslation}     from "react-i18next";

interface IJobConfig {
	filter?: IJobStatus[];
	orderBy?: IQueryOrderBy<IJobQuery>;
	listProps?: Partial<IJobListProps>;
}

interface IJobConfigObject {
	[index: string]: IJobConfig;
}

export default withRootLayout(function Index() {
	const {t}      = useTranslation();
	const {name}   = useParams();
	const navigate = useNavigate();
	return <>
		<BrowserRootPage
			title={"root.job"}
			menuSelection={[
				"/root/job",
				"/root/job/running"
			]}
			icon={<JobIcon/>}
			footer={<JobMenu/>}
		>
			<JobProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
				applyFilter={{
					status:   {
						in: [
							"NEW",
							"RUNNING"
						],
					},
					finished: null,
					name,
				}}
				defaultOrderBy={[
					{started: "asc"},
					{created: "asc"},
				] as any}
			>
				<JobList
					providerProps={{
						live:      2500,
						onSuccess: async data => {
							if (!data.length) {
								navigate("/root/job/all");
								await message.success({
									content: t("common.job.all.done"),
									key:     "common.job.all.done",
								});
							}
						}
					}}
					disableToolbar
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
					status:   {
						in: [
							"NEW",
							"RUNNING"
						],
					},
					finished: null,
					name,
				}}
				defaultOrderBy={[
					{started: "asc"},
					{created: "asc"},
				] as any}
			>
				<JobList
					providerProps={{
						live:      2500,
						onSuccess: async data => {
							if (!data.length) {
								navigate("/root/job/all");
								await message.success({
									content: t("common.job.all.done"),
									key:     "common.job.all.done",
								});
							}
						}
					}}
					disableToolbar
				/>
			</JobProviderControl>
		</MobileRootPage>
	</>;
});


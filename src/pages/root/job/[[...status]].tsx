import {JobIcon} from "@/puff-smith";
import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {JobMenu} from "@/puff-smith/site/root/job";
import {IJobListProps, JobsList} from "@/puff-smith/site/shared/job";
import {JobsSourceControlProvider} from "@/sdk/api/job/query";
import {IJobStatus} from "@leight-core/api";
import {useNavigate, useParams} from "@leight-core/client";
import {message} from "antd";
import {useTranslation} from "react-i18next";

interface IJobConfig {
	filter?: IJobStatus[];
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
			listProps: {
				sourceProps: {
					live: 1000,
					options: {
						onSuccess: async data => {
							if (!data.count) {
								navigate("/root/job/all");
								await message.success({
									content: t("common.job.all.done"),
									key: "common.job.all.done",
								});
							}
						}
					}
				},
				disableToolbar: true,
			},
		},
		"review": {
			filter: ["REVIEW"],
			listProps: {
				sourceProps: {
					live: 0,
				},
				showFilter: false,
			},
		},
		"failure": {
			filter: ["FAILURE"],
			listProps: {
				sourceProps: {
					live: 0,
				},
				showFilter: false,
			},
		},
		"success": {
			filter: ["SUCCESS"],
			listProps: {
				sourceProps: {
					live: 0,
				},
				showFilter: false,
			},
		},
		"done": {
			filter: ["DONE"],
			listProps: {
				sourceProps: {
					live: 0,
				},
				showFilter: false,
				showCommit: false,
			},
		},
		"all": {
			filter: undefined,
			listProps: {
				sourceProps: {
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
		headerPostfix={<JobMenu/>}
	>
		<JobsSourceControlProvider
			applyFilter={{
				status: config.filter && {
					in: config.filter,
				},
				name,
			}}
			defaultOrderBy={{
				created: "desc",
			}}
		>
			<JobsList {...config.listProps}/>
		</JobsSourceControlProvider>
	</RootPage>;
});


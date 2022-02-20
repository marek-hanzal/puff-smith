import {ImportForm, ImportJobTypePreview} from "@/puff-smith/site/shared/import";
import {IJobTableProps, JobTable} from "@/puff-smith/site/shared/job";
import {CommitDto} from "@/sdk/edde/job/dto/commit";
import {DeleteDto} from "@/sdk/edde/job/dto/delete";
import {InterruptDto} from "@/sdk/edde/job/dto/interrupt";
import {merge} from "@leight-core/leight";
import {message, Tabs} from "antd";
import {FC, useCallback, useState} from "react";
import {useTranslation} from "react-i18next";

export interface IImportControlProps {
	group: string;
	table?: IJobTableProps;
	commitBy?: CommitDto;
	interruptBy?: InterruptDto;
	deleteBy?: DeleteDto;
}

export const ImportControl: FC<IImportControlProps> = ({group, commitBy, interruptBy, deleteBy, table = {}}) => {
	const {t} = useTranslation();
	const [defaultTab, setDefaultTab] = useState("import");

	const jobTypePreview = useCallback(jobLog => <ImportJobTypePreview jobLog={jobLog}/>, []);

	return <Tabs
		activeKey={defaultTab}
		onChange={setDefaultTab}
		destroyInactiveTabPane
	>
		<Tabs.TabPane key={"import"} tab={t("shared.import.import.tab.title")}>
			<ImportForm onSuccess={() => {
				message.success(t("shared.import.success"));
				setDefaultTab("jobs");
			}} group={group}/>
		</Tabs.TabPane>
		<Tabs.TabPane key={"jobs"} tab={t("shared.import.table.tab.title")}>
			<JobTable
				{...merge<IJobTableProps, IJobTableProps>({
					jobTypePreview,
					commitBy,
					interruptBy,
					deleteBy,
				}, table)}
				// filter={{services: importQuery.data.items.map(item => item.service)}}
			/>
		</Tabs.TabPane>
	</Tabs>;
};

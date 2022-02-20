import {JsonPrint} from "@/puff-smith/component/JsonPrint";
import {JobLogTypePreview} from "@/puff-smith/site/shared/job";
import {JobLogDto} from "@/sdk/edde/job/dto/log";
import {Preview} from "@leight-core/leight";
import {Tabs} from "antd";
import {FC, ReactElement} from "react";
import {useTranslation} from "react-i18next";

export interface IJobLogPreviewProps {
	jobLog: JobLogDto;
	jobTypePreview?: (jobLog: JobLogDto) => ReactElement;
}

export const JobLogPreview: FC<IJobLogPreviewProps> = ({jobLog, jobTypePreview = jobLog => <JobLogTypePreview jobLog={jobLog}/>}) => {
	const {t} = useTranslation();
	return <Tabs>
		<Tabs.TabPane key={"item"} tab={t("shared.job-log.preview.item")}>
			{jobTypePreview(jobLog)}
		</Tabs.TabPane>
		<Tabs.TabPane key={"common"} tab={t("shared.job-log.preview.common")}>
			<Preview translation={"shared.job-lob.preview"}>
				{{
					message: t("shared.job-log.message." + jobLog.message, jobLog.message, {data: jobLog.item}),
					reference: jobLog.reference,
					type: jobLog.type,
					item: <JsonPrint json={jobLog.item}/>,
				}}
			</Preview>
		</Tabs.TabPane>
		<Tabs.TabPane key={"message"} tab={t("shared.job-log.preview.message")}>
			<pre>
				{t("shared.job-log.message." + jobLog.message, jobLog.message, {data: jobLog.item})}
			</pre>
		</Tabs.TabPane>
	</Tabs>;
};

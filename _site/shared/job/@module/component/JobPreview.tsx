import {JsonPrint} from "@/puff-smith/component/JsonPrint";
import {IJobStatus, JobLogTable, JobProgress} from "../../index";
import {JobDto} from "@/sdk/edde/job/dto";
import {JobLogDto} from "@/sdk/edde/job/dto/log";
import {Preview, secDuration, toLocalDateTime} from "@leight-core/common";
import {Statistic, Tabs, Typography} from "antd";
import {prettyPrintJson} from "pretty-print-json";
import {FC, ReactElement, ReactNode} from "react";
import {useTranslation} from "react-i18next";

export interface IJobPreviewProps {
	job: JobDto;
	jobTypePreview?: (jobLog: JobLogDto) => ReactElement;
	customJobLogTable?: (job: JobDto) => ReactNode;
}

export const JobPreview: FC<IJobPreviewProps> = ({customJobLogTable, job, jobTypePreview}) => {
	const {t} = useTranslation();
	return <Tabs
		defaultActiveKey={job.status === IJobStatus.JOB_CHECK ? "job-log" : "common"}
	>
		<Tabs.TabPane key={"common"} tab={t("shared.job.preview.common")}>
			<Preview translation={"shared.job.preview"}>
				{{
					progress: <JobProgress job={job}/>,
					status: t("job.status." + job.status),
					service: <>{t("job-service." + job.service)} (<Typography.Text type={"secondary"}>{job.service}</Typography.Text>)</>,
					user: job?.user?.name,
					ratio: job.ratio.toFixed(2),
					stats: <Statistic formatter={value => value} value={job.success} suffix={"/ " + job.total}/>,
					runtime: secDuration(job.runtime),
					performance: (job.performance * 1000).toFixed(2),
					created: toLocalDateTime(job.created),
					done: toLocalDateTime(job.done),
					params: <JsonPrint json={job.params}/>,
				}}
			</Preview>
		</Tabs.TabPane>
		<Tabs.TabPane key={"job-log"} tab={t("shared.job.preview.job-log")}>
			{customJobLogTable ? customJobLogTable(job) : <JobLogTable
				jobTypePreview={jobTypePreview}
				job={job}
			/>}
		</Tabs.TabPane>
		<Tabs.TabPane key={"result"} disabled={!job.result} tab={t("shared.job.preview.result")}>
			<pre dangerouslySetInnerHTML={{__html: prettyPrintJson.toHtml(job.result)}}/>
		</Tabs.TabPane>
	</Tabs>;
};

import {JobLogDto} from "@/sdk/edde/job/dto/log";
import {IndexOf} from "@leight-core/common";
import {Result} from "antd";
import {FC, ReactElement} from "react";
import {useTranslation} from "react-i18next";

export interface IJobLogTypePreviewProps {
	jobLog: JobLogDto;
	children?: IndexOf<(jobLog: JobLogDto) => ReactElement>;
}

export const JobLogTypePreview: FC<IJobLogTypePreviewProps> = ({jobLog, children = {}}) => {
	const {t} = useTranslation();
	children["job.failure"] = children["job.failure"] ?? (() => <Result
		status={"error"}
		title={t("shared.job-log.failure.title")}
		subTitle={t("error." + jobLog.message, jobLog.message)}
	/>);
	return <>
		{jobLog.type && children[jobLog.type]?.(jobLog) || <Result
			status={"info"}
			subTitle={jobLog.message}
		/>}
	</>;
};

import {IJob} from "@leight-core/api";
import {toHumanNumber} from "@leight-core/client";
import {Tooltip} from "antd";
import dayjs from "dayjs";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IJobPerformanceInlineProps {
	job: IJob;
}

export const JobPerformanceInline: FC<IJobPerformanceInlineProps> = ({job}) => {
	const {t} = useTranslation();
	return job.started ?
		<Tooltip title={t("root.job.performance.tooltip")}>
			{toHumanNumber(((job.success || 0) + (job.failure || 0) + (job.skip || 0)) / dayjs.duration(dayjs(job.finished || undefined).diff(job.started)).asSeconds())}/s
		</Tooltip>
		: <>-</>;
};

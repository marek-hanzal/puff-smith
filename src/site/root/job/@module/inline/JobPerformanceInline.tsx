import {IJob} from "@leight-core/api";
import {toHumanNumber} from "@leight-core/client";
import {Space, Tooltip, Typography} from "antd";
import dayjs from "dayjs";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IJobPerformanceInlineProps {
	job: IJob;
}

export const JobPerformanceInline: FC<IJobPerformanceInlineProps> = ({job}) => {
	const {t} = useTranslation();
	const current = (job.success || 0) + (job.failure || 0) + (job.skip || 0);
	const performance = current / dayjs.duration(dayjs(job.finished || undefined).diff(job.started)).asSeconds();
	return job.started ?
		<Tooltip title={t("root.job.performance.tooltip")}>
			<Space size={"small"}>
				<Typography.Text>{toHumanNumber(performance)}/s</Typography.Text>
				{!job.finished && <span>
					(~{dayjs.duration((job.total - current) / Math.max(1, performance), "seconds").humanize()})
				</span>}
			</Space>
		</Tooltip>
		: <>-</>;
};

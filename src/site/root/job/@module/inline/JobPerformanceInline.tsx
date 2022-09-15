import {IJob} from "@leight-core/api";
import {toHumanNumber} from "@leight-core/utils";
import {Space, Tooltip} from "antd";
import dayjs from "dayjs";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IJobPerformanceInlineProps {
	job: IJob;
}

export const JobPerformanceInline: FC<IJobPerformanceInlineProps> = ({job}) => {
	const {t} = useTranslation();
	const current = job.success + job.failure + job.skip;
	const performance = current / dayjs.duration(Math.abs(dayjs(job.finished || undefined).diff(job.started))).asSeconds();
	return job.started ?
		<Tooltip title={t("root.job.performance.tooltip")}>
			<Space size={"small"}>
				<span>{toHumanNumber(performance)}/s</span>
				{!job.finished && <span>
					(~{dayjs.duration((job.total - current) / Math.max(1, performance), "seconds").humanize()})
				</span>}
			</Space>
		</Tooltip>
		: <>-</>;
};

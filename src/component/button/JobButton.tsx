import {JobIcon} from "@/puff-smith/component/icon/JobIcon";
import {IJobQuery, IJobSchedule} from "@/puff-smith/service/job/interface";
import {JobPerformanceInline} from "@/puff-smith/site/root/job/@module/inline/JobPerformanceInline";
import {useJobQuery} from "@/sdk/api/job/query";
import {useScheduleMutation} from "@/sdk/api/job/schedule";
import {IQueryFilter} from "@leight-core/api";
import {isString, toHumanNumber} from "@leight-core/client";
import {Button, message, Space, Tooltip} from "antd";
import {ComponentProps, ReactNode} from "react";
import {useTranslation} from "react-i18next";

export interface IJobButtonProps<TJobParams> extends Partial<ComponentProps<typeof Button>> {
	translation: string;
	schedule: IJobSchedule<TJobParams>;
	filter?: IQueryFilter<IJobQuery>;
	label?: ReactNode;
}

export const JobButton = <TJobParams, >({translation, schedule, filter, label, ...props}: IJobButtonProps<TJobParams>) => {
	const {t} = useTranslation();
	const scheduleMutation = useScheduleMutation();
	const jobQuery = useJobQuery({
		size: 1,
		page: 0,
		filter: {
			...filter,
			status: {
				in: ["NEW", "RUNNING"],
			}
		},
	}, undefined, {
		refetchInterval: 1000,
	});
	const isRunning = jobQuery.isSuccess && jobQuery.data.count > 0;
	const job = isRunning ? jobQuery.data.items[0] : null;

	return <Tooltip title={job?.started && <JobPerformanceInline job={job}/>}>
		<Button
			icon={<JobIcon/>}
			size={"large"}
			type={"link"}
			loading={scheduleMutation.isLoading || jobQuery.isLoading || isRunning}
			onClick={() => scheduleMutation.mutate(schedule, {
				onSuccess: async () => {
					await message.success(t(`${translation}.schedule.success`));
				},
				onError: async () => {
					await message.error(t(`${translation}.schedule.failure`));
				},
			})}
			{...props}
		>
			<Space>
				{t(isString(label) ? label as string : (job ? `${translation}.schedule.${job.status}.button` : `${translation}.schedule.button`))}
				{job ? toHumanNumber(job?.progress) + "%" : null}
			</Space>
		</Button>
	</Tooltip>;
};

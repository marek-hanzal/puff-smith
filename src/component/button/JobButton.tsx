import {JobIcon} from "@/puff-smith/component/icon/JobIcon";
import {IJobQuery} from "@/puff-smith/service/job/interface";
import {JobPerformanceInline} from "@/puff-smith/site/root/job/@module/inline/JobPerformanceInline";
import {useJobQuery, useJobQueryInvalidate} from "@/sdk/api/job/query";
import {IJob, IQueryFilter} from "@leight-core/api";
import {UseToken} from "@leight-core/client";
import {isString, toHumanNumber} from "@leight-core/utils";
import {Button, message, Space, Tooltip} from "antd";
import {ComponentProps, ReactNode, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import {UseMutationResult} from "react-query";

export interface IJobButtonProps<TJobParams> extends Partial<ComponentProps<typeof Button>> {
	translation: string;
	scheduler: UseMutationResult<IJob<TJobParams>, any, TJobParams>;
	schedule: TJobParams;
	filter?: IQueryFilter<IJobQuery>;
	label?: ReactNode;
	tokens?: string[];

	onDone?(): Promise<any>;
}

export const JobButton = <TJobParams, >({translation, scheduler, schedule, filter, label, onDone, tokens, ...props}: IJobButtonProps<TJobParams>) => {
	const {t} = useTranslation();
	const jobQueryInvalidate = useJobQueryInvalidate();
	const [job, setJob] = useState<IJob>();
	const info = useRef(false);
	useJobQuery({
		size: 1,
		page: 0,
		filter: {
			...filter,
			status: {
				in: ["NEW", "RUNNING"],
			}
		},
	}, undefined, {
		keepPreviousData: true,
		refetchInterval: 2500,
		onSuccess: job => {
			setJob(prev => {
				if (prev && !job?.[0] && !info.current) {
					info.current = true;
					message.success(t(`${translation}.job.done`), undefined, () => {
						info.current = false;
					});
					onDone?.();
				}
				return job?.[0];
			});
		}
	});

	return <Tooltip title={job?.started && <JobPerformanceInline job={job}/>}>
		<UseToken tokens={tokens}>
			<Button
				icon={<JobIcon/>}
				size={"large"}
				type={"link"}
				loading={scheduler.isLoading || !!job}
				onClick={() => scheduler.mutate(schedule, {
					onSuccess: async () => {
						await jobQueryInvalidate();
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
		</UseToken>
	</Tooltip>;
};

import {IJobStatus, JobProgress, JobRow} from "@/puff-smith/site/shared/job";
import {JobDto} from "@/sdk/edde/job/dto";
import {CommitDto} from "@/sdk/edde/job/dto/commit";
import {DeleteDto} from "@/sdk/edde/job/dto/delete";
import {InterruptDto} from "@/sdk/edde/job/dto/interrupt";
import {JobLogDto} from "@/sdk/edde/job/dto/log";
import {IJobsSourceContext, IJobsSourceTableProps, JobsSourceTable, useCommitMutation, useDeleteMutation, useInterruptMutation} from "@/sdk/edde/api/shared/job/endpoint";
import {CheckCircleOutlined, CloseCircleOutlined, StopOutlined} from "@ant-design/icons";
import {DeleteItemIcon, IndexOf, QuickMenu, secDuration} from "@leight-core/leight";
import {Button, Menu, message, Popconfirm, Statistic} from "antd";
import {FC, ReactElement, ReactNode, useRef} from "react";
import {useTranslation} from "react-i18next";

interface IActionButton {
	job: JobDto;
	text: string;
	sourceContext: IJobsSourceContext;
}

export interface IJobTableProps extends IJobsSourceTableProps {
	jobTypePreview?: (jobLog: JobLogDto) => ReactElement;
	commitBy?: CommitDto;
	interruptBy?: InterruptDto;
	deleteBy?: DeleteDto;
	customJobLogTable?: (job: JobDto) => ReactNode;
}

export const JobTable: FC<IJobTableProps> = ({jobTypePreview, customJobLogTable, commitBy, interruptBy, deleteBy, ...props}) => {
	const {t} = useTranslation();
	const commit = useCommitMutation();
	const interrupt = useInterruptMutation();
	/**
	 * Index of (optimistically) disabled buttons.
	 */
	const committed = useRef<IndexOf<boolean>>({});
	const interrupted = useRef<IndexOf<boolean>>({});

	const commitByMutation = useCommitMutation();
	const interruptByMutation = useInterruptMutation();
	const deleteByMutation = useDeleteMutation();

	const CommitButton = ({job, text, sourceContext}: IActionButton) => {
		return <Button
			disabled={committed.current[job.id] || job.commit}
			type={"link"}
			onClick={() => {
				commit.mutate({jobId: job.id}, {
					onSuccess: () => {
						message.success(t("shared.job.commit.success"));
						sourceContext.result.refetch();
					}
				});
				committed.current[job.id] = true;
			}}
			icon={<CheckCircleOutlined/>}
		>
			{text}
		</Button>;
	};

	const InterruptButton = ({job, text, sourceContext}: IActionButton) => {
		return <Button
			disabled={interrupted.current[job.id] || job.status === IJobStatus.JOB_INTERRUPTED}
			type={"link"}
			onClick={() => {
				interrupt.mutate({jobId: job.id}, {
					onSuccess: () => {
						message.success(t("shared.job.interrupt.success"));
						sourceContext.result.refetch();
					}
				});
				interrupted.current[job.id] = true;
			}}
			icon={<CloseCircleOutlined/>}
		>
			{text}
		</Button>;
	};

	return <JobsSourceTable
		options={{
			refetchInterval: 750,
		}}
		expandable={{
			expandedRowRender: job => <JobRow customJobLogTable={customJobLogTable} job={job}/>,
			rowExpandable: job => !job.commit && job.status >= IJobStatus.JOB_DONE,
		}}
		toFilter={({filters}) => ({
			status: filters.status as [],
		})}
		{...props}
	>
		{({column, sourceContext}) => [
			column({
				key: "id",
				width: 0,
				title: <QuickMenu>
					<Popconfirm
						title={t("shared.import.commit.confirm.title")}
						onConfirm={() => commitByMutation.mutate(commitBy, {
							onSuccess: () => {
								message.success(t("shared.job.commit-all.success"));
							}
						})}
					>
						<Menu.Item>
							<Button
								size={"large"}
								icon={<CheckCircleOutlined/>}
								type={"link"}
							>
								{t("shared.import.tool.commit.button")}
							</Button>
						</Menu.Item>
					</Popconfirm>
					<Popconfirm
						title={t("shared.import.interrupt.confirm.title")}
						onConfirm={() => interruptByMutation.mutate(interruptBy, {
							onSuccess: () => {
								message.success(t("shared.job.interrupt-all.success"));
							}
						})}
					>
						<Menu.Item>
							<Button
								size={"large"}
								icon={<StopOutlined/>}
								danger
								type={"link"}
							>
								{t("shared.import.tool.interrupt.button")}
							</Button>

						</Menu.Item>
					</Popconfirm>
					<Popconfirm
						title={t("shared.import.delete.confirm.title")}
						onConfirm={() => deleteByMutation.mutate(deleteBy, {
							onSuccess: () => {
								message.success(t("shared.job.delete-all.success"));
							}
						})}
					>
						<Menu.Item>
							<Button
								size={"large"}
								icon={<DeleteItemIcon/>}
								danger
								type={"link"}
							>
								{t("shared.import.tool.clear.button")}
							</Button>
						</Menu.Item>
					</Popconfirm>
				</QuickMenu>
			}),
			column({
				key: "status",
				width: 120,
				dataIndex: "status",
				title: "shared.job.column.status.label",
				render: (item, job) => {
					const text = t("job.status." + item);
					switch (job.status) {
						case IJobStatus.JOB_SCHEDULED:
							return <InterruptButton sourceContext={sourceContext} job={job} text={text}/>;
						case IJobStatus.JOB_RUNNING:
							return <InterruptButton sourceContext={sourceContext} job={job} text={text}/>;
						case IJobStatus.JOB_INTERRUPTED:
							return <CommitButton sourceContext={sourceContext} job={job} text={text}/>;
						case IJobStatus.JOB_CHECK:
							return <CommitButton sourceContext={sourceContext} job={job} text={text}/>;
						case IJobStatus.JOB_FAILURE:
							return <CommitButton sourceContext={sourceContext} job={job} text={text}/>;
						case IJobStatus.JOB_DONE:
							return <CommitButton sourceContext={sourceContext} job={job} text={text}/>;
					}
					return text;
				},
				filters: [
					{value: IJobStatus.JOB_CREATED, text: t("job.status." + IJobStatus.JOB_CREATED)},
					{value: IJobStatus.JOB_SCHEDULED, text: t("job.status." + IJobStatus.JOB_SCHEDULED)},
					{value: IJobStatus.JOB_RUNNING, text: t("job.status." + IJobStatus.JOB_RUNNING)},
					{value: IJobStatus.JOB_DONE, text: t("job.status." + IJobStatus.JOB_DONE)},
					{value: IJobStatus.JOB_CHECK, text: t("job.status." + IJobStatus.JOB_CHECK)},
					{value: IJobStatus.JOB_FAILURE, text: t("job.status." + IJobStatus.JOB_FAILURE)},
					{value: IJobStatus.JOB_INTERRUPTED, text: t("job.status." + IJobStatus.JOB_INTERRUPTED)},
				],
			}),
			column({
				key: "service",
				dataIndex: "service",
				width: 220,
				title: "shared.job.column.service.label",
				render: item => t("job-service." + item),
			}),
			column({
				key: "progress",
				dataIndex: "progress",
				title: "shared.job.column.progress.label",
				render: (_, job) => <JobProgress job={job}/>,
			}),
			column({
				key: "stats",
				width: 220,
				title: "shared.job.column.stats.label",
				render: (_, job) => <>
					<Statistic formatter={value => value} value={job.success} suffix={"/ " + job.total}/>
				</>
			}),
			column({
				key: "runtime",
				dataIndex: "runtime",
				width: 220,
				title: "shared.job.column.runtime.label",
				render: (_, {runtime}) => secDuration(runtime),
			}),
		]}
	</JobsSourceTable>;
};

import {JobLogPreview} from "../../index";
import {JobDto} from "@/sdk/edde/job/dto";
import {JobLogDto} from "@/sdk/edde/job/dto/log";
import {IJobLogsSourceTableProps, JobLogsSourceTable, TypesSourceSelect, useLevelsQuery} from "@/sdk/edde/api/shared/job/log/endpoint";
import {FilterOutlined} from "@ant-design/icons";
import {Centered, DeleteItemIcon, Form, FormContext, FormItem, IndexOf, Submit, toFilters} from "@leight-core/common";
import {Button, Card, Space, Typography} from "antd";
import {BaseType} from "antd/lib/typography/Base";
import {FC, ReactElement} from "react";
import {useTranslation} from "react-i18next";

export interface IJobLogTableProps extends IJobLogsSourceTableProps {
	job: JobDto;
	jobTypePreview?: (jobLog: JobLogDto) => ReactElement;
}

export const JobLogTable: FC<IJobLogTableProps> = ({job, jobTypePreview, ...props}) => {
	const {t} = useTranslation();
	const levelMapper: IndexOf<BaseType> = {
		1: "warning",
		2: "danger",
	};

	const levelsQuery = useLevelsQuery(undefined, undefined, {
		staleTime: 1000 * 60 * 3600,
	});

	return <JobLogsSourceTable
		filter={{
			jobId: job.id,
		}}
		expandable={{
			expandedRowRender: jobLog => <Card><JobLogPreview jobTypePreview={jobTypePreview} jobLog={jobLog}/></Card>,
		}}
		toFilter={({filters}) => ({
			level: filters.level as number[],
		})}
		{...props}
	>
		{({column, sourceContext}) => [
			column({
				key: "message",
				title: "shared.job-log.table.message",
				dataIndex: "message",
				ellipsis: true,
				render: (item, jobLog) => <Typography.Text type={levelMapper[jobLog.level] || "secondary"}>
					{t("error." + item, item, {data: jobLog.item})}
				</Typography.Text>,
			}),
			column({
				key: "reference",
				title: "shared.job-log.table.reference",
				dataIndex: "reference",
				width: 120,
				render: (_, jobLog) => jobLog.reference,
			}),
			column({
				key: "level",
				title: "shared.job-log.table.level",
				dataIndex: "level",
				width: 120,
				filteredValue: sourceContext.filter?.level,
				filters: toFilters(levelsQuery, data => data.items.map(level => ({text: t("shared.log.level." + level.level, level.level + ""), value: level.level}))),
				render: (item, jobLog) => <Typography.Text type={levelMapper[jobLog.level] || "secondary"}>{t("shared.log.level." + jobLog.level, jobLog.level + "")}</Typography.Text>,
			}),
			column({
				key: "type",
				title: "shared.job-log.table.type",
				dataIndex: "type",
				width: 160,
				filtered: (sourceContext.filter?.type || []).length > 0 || (sourceContext.filter?.notType || []).length > 0,
				filterDropdown: () => <Card style={{width: "32em"}}>
					<Form
						size={"middle"}
						toForm={() => ({
							type: sourceContext.filter?.type,
							notType: sourceContext.filter?.notType,
						})}
						onSuccess={({values}) => {
							sourceContext.setFilter({
								type: values?.type,
								notType: values?.notType,
							});
						}}
					>
						<FormContext.Consumer>
							{formContext => <>
								<FormItem field={"type"} labels={["shared.job-log.type.select.label"]}>
									<TypesSourceSelect
										mode={"multiple"}
										allowClear
										toOption={logTypeDto => ({label: t("shared.log.type." + (logTypeDto.type || "common")), value: logTypeDto.id})}
									/>
								</FormItem>
								<FormItem field={"notType"} labels={["shared.job-log.not-type.select.label"]}>
									<TypesSourceSelect
										mode={"multiple"}
										allowClear
										toOption={logTypeDto => ({label: t("shared.log.type." + (logTypeDto.type || "common")), value: logTypeDto.id})}
									/>
								</FormItem>
								<Centered>
									<Space align={"baseline"}>
										<Submit size={"middle"} icon={<FilterOutlined/>} label={"filter"}/>
										<Button
											type={"link"}
											danger
											icon={<DeleteItemIcon/>}
											onClick={() => formContext.reset()}
										/>
									</Space>
								</Centered>
							</>}
						</FormContext.Consumer>
					</Form>
				</Card>,
				render: (_, jobLog) => t("shared.log.type." + (jobLog.type || "common")),
			}),
		]}
	</JobLogsSourceTable>;
};

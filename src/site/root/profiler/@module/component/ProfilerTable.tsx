import {ProfilerNamesSelect} from "@/puff-smith/site/root/profiler";
import {IProfilersSourceTableProps, ProfilersSourceTable, useDisableMutation, useEnableMutation, useIsEnabledQuery, useProfilersQueryInvalidate} from "@/sdk/edde/api/root/profiler/endpoint";
import {RightCircleOutlined, StopOutlined} from "@ant-design/icons";
import {Centered, Form, FormItem, Submit, toLocalDateTime} from "@leight-core/common";
import {Alert, Button, Card, message} from "antd";
import dayjs from "dayjs";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IProfilerTableProps extends Partial<IProfilersSourceTableProps> {
}

export const ProfilerTable: FC<IProfilerTableProps> = props => {
	const {t} = useTranslation();
	const isEnabledQuery = useIsEnabledQuery();
	const profilersQueryInvalidate = useProfilersQueryInvalidate();
	const enableMutation = useEnableMutation();
	const disableMutation = useDisableMutation();
	return <>
		{isEnabledQuery.isSuccess && !isEnabledQuery.data && <Alert
			type={"info"}
			message={t("root.profiler.enable.title")}
			description={t("root.profiler.enable.subtitle")}
			showIcon
			action={[
				<Button
					key={"enable"}
					type={"link"}
					danger
					disabled={enableMutation.isLoading}
					icon={<RightCircleOutlined/>}
					onClick={() => {
						enableMutation.mutate(undefined, {
							onSuccess: () => {
								message.success(t("root.profiler.enable.success"));
								profilersQueryInvalidate();
								isEnabledQuery.refetch();
							}
						});
					}}
				>
					{t("root.profiler.enable.button")}
				</Button>
			]}
		/>}
		{isEnabledQuery.isSuccess && isEnabledQuery.data && <Alert
			type={"warning"}
			message={t("root.profiler.is-enabled.title")}
			description={t("root.profiler.is-enabled.subtitle")}
			showIcon
			action={[
				<Button
					key={"disable"}
					type={"link"}
					icon={<StopOutlined/>}
					disabled={disableMutation.isLoading}
					onClick={() => {
						disableMutation.mutate(undefined, {
							onSuccess: () => {
								message.success(t("root.profiler.disable.success"));
								isEnabledQuery.refetch();
							}
						});
					}}
				>
					{t("root.profiler.disable.button")}
				</Button>
			]}
		/>}
		<ProfilersSourceTable
			{...props}
		>
			{({column, sourceContext}) => [
				column({
					key: "id",
					width: 0,
				}),
				column({
					key: "name",
					dataIndex: "name",
					sorter: true,
					title: "root.profiler.table.name",
					filterDropdown: () => <Card>
						<Form
							style={{width: "48em"}}
							onSuccess={({values}) => {
								sourceContext.setFilter({
									name: values.name,
									names: values.names,
								});
							}}
						>
							<FormItem field={"name"} labels={["root.profiler.table.name.filter"]}/>
							<FormItem field={"names"} labels={["root.profiler.table.names.filter"]}>
								<ProfilerNamesSelect/>
							</FormItem>
							<Centered>
								<Submit label={"root.profiler.table.name.filter"}/>
							</Centered>
						</Form>
					</Card>
				}),
				column({
					key: "runtime",
					dataIndex: "runtime",
					title: "root.profiler.table.runtime",
					width: 160,
					sorter: true,
					render: (_, {runtime}) => runtime.toFixed(4),
				}),
				column({
					key: "stamp",
					dataIndex: "stamp",
					title: "root.profiler.table.stamp",
					sorter: true,
					width: 180,
					render: (stamp) => toLocalDateTime(dayjs.unix(stamp)),
				}),
			]}
		</ProfilersSourceTable>
	</>;
};

import {DropLogsButton, LogTagsSelect, LogTypeSelect} from "@/puff-smith/site/root/log";
import {UserSelect} from "@/puff-smith/site/root/user";
import {UndoOutlined} from "@ant-design/icons";
import {QuickMenu, toLocalDateTime} from "@leight-core/leight";
import {Button, Card, Menu, Tag, Tooltip, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {ILogsSourceTableProps, LogsSourceTable} from "@/sdk/edde/api/root/log/endpoint";

export interface ILogsTableProps extends Partial<ILogsSourceTableProps> {
}

export const LogsTable: FC<ILogsTableProps> = props => {
	const {t} = useTranslation();
	return <LogsSourceTable
		scroll={{x: 2200}}
		expandable={{
			expandedRowRender: item => (
				<pre>
					{item.stack}
				</pre>
			),
			rowExpandable: item => !!item.stack
		}}
		{...props}
	>
		{({column, sourceContext}) => [
			column({
				key: "id",
				width: 0,
				title: <QuickMenu>
					<Menu.Item>
						<DropLogsButton
							type={"link"}
						/>
					</Menu.Item>
					<Menu.Divider/>
					<Menu.Item>
						<Button
							type={"link"}
							icon={<UndoOutlined/>}
							onClick={() => {
								sourceContext.setFilter(undefined);
								sourceContext.setOrderBy(undefined);
							}}
						>
							{t("shared.table.reset.button")}
						</Button>
					</Menu.Item>
				</QuickMenu>
			}),
			column({
				key: "stamp",
				dataIndex: "stamp",
				width: 220,
				title: "root.system.log.stamp",
				sorter: true,
				render: (item, row) => <Tooltip title={row.microtime}>{toLocalDateTime(item)}</Tooltip>
			}),
			column({
				key: "log",
				dataIndex: "log",
				title: "root.system.log.log",
				render: (item, row) => {
					switch (row.type) {
						case "error":
							return <Typography.Text type={"danger"}>{item}</Typography.Text>;
						case "warning":
							return <Typography.Text type={"warning"}>{item}</Typography.Text>;
						case "debug":
							return <Typography.Text type={"secondary"}>{item}</Typography.Text>;
					}
					return <Typography.Text>{item}</Typography.Text>;
				},
			}),
			column({
				key: "type",
				dataIndex: "type",
				title: "root.system.log.type",
				width: 140,
				filterDropdown: () => <Card>
					<LogTypeSelect
						style={{width: "24em"}}
						value={sourceContext.filter?.types}
						onChange={types => sourceContext.mergeFilter({
							types,
						})}
					/>
				</Card>,
			}),
			column({
				key: "tags",
				dataIndex: "tags",
				title: "root.system.log.tags",
				width: 160,
				filterDropdown: () => <Card>
					<LogTagsSelect
						style={{width: "24em"}}
						value={sourceContext.filter?.tagIds}
						onChange={tagIds => sourceContext.mergeFilter({
							tagIds,
						})}
					/>
				</Card>,
				render: (_, {tags}) => tags.map(tag => <Tag key={tag.id}>{t("label." + tag.label)}</Tag>),
			}),
			column({
				key: "user",
				dataIndex: "user",
				title: "root.system.log.user",
				width: 220,
				render: (_, row) => row.user?.name,
				filterDropdown: () => <Card>
					<UserSelect
						style={{width: "24em"}}
						mode={"multiple"}
						value={sourceContext.filter?.userIds}
						allowClear
						onChange={userIds => sourceContext.mergeFilter({userIds})}
					/>
				</Card>
			}),
			column({
				key: "trace",
				dataIndex: "trace",
				title: "root.system.log.trace",
				width: 360,
				render: item => <Typography.Paragraph copyable>{item}</Typography.Paragraph>,
			}),
			column({
				key: "reference",
				dataIndex: "reference",
				title: "root.system.log.reference",
				width: 360,
				render: item => item ? <Typography.Paragraph copyable>{item}</Typography.Paragraph> : null,
			}),
		]}
	</LogsSourceTable>;
};

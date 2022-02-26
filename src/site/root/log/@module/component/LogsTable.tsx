import {DropLogsButton} from "@/puff-smith/site/root/log";
import {QuickMenu, toLocalDateTime} from "@leight-core/common";
import {Menu, Tag, Tooltip, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {ILogsSourceTableProps, LogsSourceTable} from "@/sdk/edde/api/root/log/endpoint";

export interface ILogsTableProps extends Partial<ILogsSourceTableProps> {
}

export const LogsTable: FC<ILogsTableProps> = props => {
	const {t} = useTranslation();
	return <LogsSourceTable
		scroll={{x: 2600}}
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
		{({column}) => [
			column({
				key: "id",
				width: 0,
				title: <QuickMenu>
					<Menu.Item>
						<DropLogsButton
							type={"link"}
						/>
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
			}),
			column({
				key: "tags",
				dataIndex: "tags",
				title: "root.system.log.tags",
				width: 160,
				render: (_, {tags}) => tags.map(tag => <Tag key={tag}>{t("label." + tag)}</Tag>),
			}),
			column({
				key: "user",
				dataIndex: "user",
				title: "root.system.log.user",
				width: 220,
				render: (_, row) => row.user?.name,
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

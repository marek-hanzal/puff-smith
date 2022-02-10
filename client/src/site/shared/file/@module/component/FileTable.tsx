import {UserSelect} from "@/puff-smith/site/root/user";
import {DownloadFile, FileRowQuickMenu, FileToolQuickMenu} from "@/puff-smith/site/shared/file";
import {FilesSourceTable, IFilesSourceTableProps} from "@/sdk/edde/api/shared/file/endpoint";
import {toLocalDateTime} from "@leight-core/leight";
import {Card} from "antd";
import dayjs from "dayjs";
import fileSize from "filesize";
import {FC} from "react";

export interface IFileTableProps extends Partial<IFilesSourceTableProps> {
}

export const FileTable: FC<IFileTableProps> = props => {
	return <FilesSourceTable
		scroll={{x: 2600}}
		{...props}
	>
		{({column, sourceContext}) => [
			column({
				key: "id",
				width: 0,
				align: "center",
				title: <FileToolQuickMenu sourceContext={sourceContext}/>,
				render: (_, file) => <FileRowQuickMenu file={file} sourceContext={sourceContext}/>,
			}),
			column({
				key: "name",
				dataIndex: "name",
				title: "shared.file.column.name",
				sorter: true,
				render: (_, file) => <DownloadFile file={file} type={"link"}>{file.name}</DownloadFile>
			}),
			column({
				key: "path",
				dataIndex: "path",
				title: "shared.file.column.path",
				sorter: true,
				width: 240,
			}),
			column({
				key: "native",
				dataIndex: "native",
				title: "shared.file.column.native",
				sorter: true,
				width: 360,
			}),
			column({
				key: "mime",
				dataIndex: "mime",
				title: "shared.file.column.mime",
				sorter: true,
				width: 380,
			}),
			column({
				key: "size",
				dataIndex: "size",
				title: "shared.file.column.size",
				sorter: true,
				width: 130,
				render: fileSize,
			}),
			column({
				key: "ttl",
				dataIndex: "ttl",
				title: "shared.file.column.ttl",
				sorter: true,
				width: 200,
				render: ttl => ttl ? toLocalDateTime(dayjs.unix(ttl)) : "-",
			}),
			column({
				key: "user",
				dataIndex: "user",
				title: "shared.file.column.user",
				width: 220,
				render: (_, file) => file?.user?.name,
				filterDropdown: () => <Card>
					<UserSelect
						style={{width: "24em"}}
						mode={"multiple"}
						allowClear
						onChange={userIds => sourceContext.setFilter({userIds})}
					/>
				</Card>
			}),
			column({
				key: "created",
				dataIndex: "created",
				title: "shared.file.column.created",
				sorter: true,
				width: 200,
				render: created => toLocalDateTime(created),
			}),
			column({
				key: "updated",
				dataIndex: "updated",
				title: "shared.file.column.updated",
				sorter: true,
				width: 200,
				render: created => toLocalDateTime(created),
			}),
		]}
	</FilesSourceTable>;
};

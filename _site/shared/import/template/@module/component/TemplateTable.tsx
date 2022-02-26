import {DownloadFile, FileRowQuickMenu, FileToolQuickMenu} from "../../../../file";
import {FilesSourceTable, IFilesSourceTableProps} from "@/sdk/edde/api/shared/file/endpoint";
import fileSize from "filesize";
import {FC} from "react";

export interface ITemplateTableProps extends Partial<IFilesSourceTableProps> {
	utils?: boolean;
}

export const TemplateTable: FC<ITemplateTableProps> = ({utils = true, ...props}) => {
	return <FilesSourceTable
		filter={{
			path: "/import-template",
		}}
		{...props}
	>
		{({column, sourceContext}) => [
			utils ? column({
				key: "id",
				width: 0,
				align: "center",
				title: <FileToolQuickMenu sourceContext={sourceContext}/>,
				render: (_, file) => <FileRowQuickMenu file={file} sourceContext={sourceContext}/>,
			}) : undefined,
			column({
				key: "name",
				dataIndex: "name",
				title: "shared.file.column.name",
				sorter: true,
				render: (_, file) => <DownloadFile file={file} type={"link"}>{file.name}</DownloadFile>
			}),
			column({
				key: "size",
				dataIndex: "size",
				title: "shared.file.column.size",
				sorter: true,
				width: 130,
				render: size => fileSize(size),
			}),
			column({
				key: "user",
				dataIndex: "user",
				title: "shared.file.column.user",
				width: 220,
				render: (_, file) => file?.user?.name,
			}),
		]}
	</FilesSourceTable>;
};

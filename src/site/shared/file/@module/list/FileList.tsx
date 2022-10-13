import {DownloadFile} from "@/puff-smith/site/shared/file/@module/component/DownloadFile";
import {
	FileTableSource,
	IFileTableSourceProps
}                     from "@/sdk/api/file/query";
import {toHumanBytes} from "@leight-core/viv";
import {FC}           from "react";

export interface IFileListProps extends Partial<IFileTableSourceProps> {
}

export const FileList: FC<IFileListProps> = props => {
	return <FileTableSource
		{...props}
	>
		{[
			{
				key:    "name",
				width:  320,
				render: (_, file) => <DownloadFile
					file={file}
					type={"link"}
				>
					{file.name}
				</DownloadFile>,
			},
			{
				key:   "path",
				width: 320,
			},
			{
				key: "location",
			},
			{
				key:    "size",
				render: size => toHumanBytes(size),
				width:  180,
			},
		]}
	</FileTableSource>;
};

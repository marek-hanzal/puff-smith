import {FC} from "react";
import {FilesListSource, IFilesListSourceProps} from "@/sdk/api/leight/shared/file/query";
import {ListItem} from "@leight-core/client";

export interface IFileListProps extends Partial<IFilesListSourceProps> {
}

export const FileList: FC<IFileListProps> = props => {
	return <FilesListSource {...props}>
		{file => <ListItem>
			<h1>{file.id}</h1>
		</ListItem>}
	</FilesListSource>
}

import {DownloadFile} from "@/puff-smith/site/shared/file/@module/component/DownloadFile";
import {FileListSource, IFileListSourceProps} from "@/sdk/api/file/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {toHumanBytes} from "@leight-core/utils";
import {Space, Typography} from "antd";
import {FC} from "react";

export interface IFileListProps extends Partial<IFileListSourceProps> {
}

export const FileList: FC<IFileListProps> = props => {
	return <FileListSource
		itemLayout={"vertical"}
		{...props}
	>
		{file => <ListItem key={file.id}>
			<ListItemMeta
				title={<Space>
					<Typography.Text type={"secondary"}>
						{file.path}
					</Typography.Text>
					<DownloadFile
						file={file}
						type={"link"}
					>
						{file.name}
					</DownloadFile>
					<Typography.Text type={"secondary"}>
						{toHumanBytes(file.size)}
					</Typography.Text>
				</Space>}
				description={file.location}
			/>
		</ListItem>}
	</FileListSource>;
};

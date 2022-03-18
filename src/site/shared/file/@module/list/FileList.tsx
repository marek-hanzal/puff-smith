import {FC} from "react";
import {FilesListSource, IFilesListSourceProps} from "@/sdk/api/file/query";
import {ListItem, ListItemMeta, toHumanBytes} from "@leight-core/client";
import {Space, Typography} from "antd";
import {DownloadFile} from "@/puff-smith/site/shared/file";

export interface IFileListProps extends Partial<IFilesListSourceProps> {
}

export const FileList: FC<IFileListProps> = props => {
	return <FilesListSource
		itemLayout={'vertical'}
		{...props}
	>
		{file => <ListItem key={file.id}>
			<ListItemMeta
				title={<Space>
					<Typography.Text type={'secondary'}>
						{file.path}
					</Typography.Text>
					<DownloadFile
						file={file}
						type={'link'}
					>
						{file.name}
					</DownloadFile>
					<Typography.Text type={'secondary'}>
						{toHumanBytes(file.size)}
					</Typography.Text>
				</Space>}
				description={file.location}
			/>
		</ListItem>}
	</FilesListSource>
}

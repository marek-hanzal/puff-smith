import {IPageMenuProps, PageMenu} from "@/puff-smith";
import {FileAddOutlined} from "@ant-design/icons";
import {CreateMenuItem, ListIcon} from "@leight-core/common";
import {FC} from "react";

export interface IFilePageMenuProps extends Partial<IPageMenuProps> {
}

export const FilePageMenu: FC<IFilePageMenuProps> = props => {
	return <PageMenu {...props}>
		{CreateMenuItem("root.file.list.menu", "/root/file/list", <ListIcon/>)}
		{CreateMenuItem("root.file.upload.menu", "/root/file/upload", <FileAddOutlined/>)}
	</PageMenu>;
};

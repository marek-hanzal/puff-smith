import {ImportIcon, IPageMenuProps, PageMenu} from "@/puff-smith";
import {ArrowUpOutlined, CopyOutlined, FileAddOutlined} from "@ant-design/icons";
import {CreateMenuItem} from "@leight-core/common";
import {FC} from "react";

export interface IImportPageMenuProps extends IPageMenuProps {
}

export const ImportPageMenu: FC<IImportPageMenuProps> = props => {
	return <PageMenu {...props}>
		{CreateMenuItem("root.import.index.page-menu", "/root/import", <ImportIcon/>)}
		{CreateMenuItem("root.import.import.page-menu", "/root/import/import", <ArrowUpOutlined/>)}
		{CreateMenuItem("root.import.upload-template.page-menu", "/root/import/upload-template", <FileAddOutlined/>)}
		{CreateMenuItem("root.import.template.page-menu", "/root/import/template", <CopyOutlined/>)}
	</PageMenu>;
};

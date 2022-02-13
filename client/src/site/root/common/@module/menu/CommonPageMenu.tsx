import {CommonIcon, IPageMenuProps, PageMenu} from "@/puff-smith";
import {BookOutlined} from "@ant-design/icons";
import {CreateMenuItem} from "@leight-core/leight";
import {FC} from "react";

export interface ICommonPageMenuProps extends Partial<IPageMenuProps> {
}

export const CommonPageMenu: FC<ICommonPageMenuProps> = props => {
	return <PageMenu {...props}>
		{CreateMenuItem("root.common.index.menu", "/root/common", <CommonIcon/>)}
		{CreateMenuItem("root.common.logs.menu", "/root/common/logs", <BookOutlined/>)}
	</PageMenu>;
};

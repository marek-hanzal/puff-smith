import {IMenuProps as ICoolMenuProps, Menu as CoolMenu, PageMenuPortal} from "@leight-core/leight";
import {FC} from "react";

export interface IPageMenuProps extends Partial<ICoolMenuProps> {
}

export const PageMenu: FC<IPageMenuProps> = props => {
	return <PageMenuPortal>
		<CoolMenu className={"module-menu"} mode={"horizontal"} {...props}/>
	</PageMenuPortal>;
};

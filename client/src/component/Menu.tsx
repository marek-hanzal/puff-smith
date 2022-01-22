import {IMenuProps as ICoolMenuProps, Menu as CoolMenu, MenuPortal, useMenuContext} from "@leight-core/leight";
import {FC} from "react";

export interface IMenuProps extends Partial<ICoolMenuProps> {
}

export const Menu: FC<IMenuProps> = props => {
	const menuContext = useMenuContext();
	return <MenuPortal>
		<CoolMenu inlineCollapsed={menuContext.collapsed} {...props}/>
	</MenuPortal>;
};

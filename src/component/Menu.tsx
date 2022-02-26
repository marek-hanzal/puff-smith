import {IMenuProps as ICoolMenuProps, Menu as CoolMenu, MenuPortal} from "@leight-core/common";
import {FC} from "react";

export interface IMenuProps extends Partial<ICoolMenuProps> {
}

export const Menu: FC<IMenuProps> = props => {
	return <MenuPortal>
		<CoolMenu {...props}/>
	</MenuPortal>;
};

import {CreateMenuItem, HomeIcon, MenuDivider} from "@leight-core/leight";
import {FC} from "react";
import {IMenuProps, Menu} from "@/puff-smith";

export interface ILabMenuProps extends Partial<IMenuProps> {
}

export const LabMenu: FC<ILabMenuProps> = props => {
	return <Menu {...props}>
		<MenuDivider/>
		{CreateMenuItem("lab.home.menu", "/lab", <HomeIcon/>)}
		<MenuDivider/>
		{CreateMenuItem("lab.build.menu", "/lab/build", <HomeIcon/>)}
	</Menu>;
};

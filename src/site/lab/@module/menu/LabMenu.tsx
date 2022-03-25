import {CreateMenuItem, HomeIcon, IMenuProps, Menu} from "@leight-core/client";
import {FC} from "react";

export interface ILabMenuProps extends Partial<IMenuProps> {
}

export const LabMenu: FC<ILabMenuProps> = props => {
	return <Menu style={{backgroundColor: 'transparent', minWidth: '50vw'}} mode={'horizontal'} {...props}>
		{CreateMenuItem("lab.home.menu", "/lab", <HomeIcon/>)}
	</Menu>;
};

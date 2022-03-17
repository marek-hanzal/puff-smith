import {FC} from "react";
import {IMenuProps, Menu} from "@leight-core/client";

export interface IPublicMenuProps extends Partial<IMenuProps> {
}

export const PublicMenu: FC<IPublicMenuProps> = props => {
	return <Menu style={{backgroundColor: 'transparent'}} mode={'horizontal'} {...props}>

	</Menu>
}

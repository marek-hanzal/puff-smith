import {FC} from "react";
import {CreateMenuItem, HomeIcon, IMenuProps, Menu} from "@leight-core/client";
import {FileDoneOutlined, HeartOutlined} from "@ant-design/icons";

export interface IPublicMenuProps extends Partial<IMenuProps> {
}

export const PublicMenu: FC<IPublicMenuProps> = props => {
	return <Menu style={{backgroundColor: 'transparent', minWidth: '50vw'}} mode={'horizontal'} {...props}>
		{CreateMenuItem("public.home.menu", "/public", <HomeIcon/>)}
		{CreateMenuItem("public.about.menu", "/public/about", <HeartOutlined/>)}
		{CreateMenuItem("public.tos.menu", "/public/tos", <FileDoneOutlined/>)}
	</Menu>
}

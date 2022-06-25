import {AboutIcon} from "@/puff-smith/component/icon/AboutIcon";
import {TosIcon} from "@/puff-smith/component/icon/TosIcon";
import {CreateMenuItem, HomeIcon, IMenuProps, Menu} from "@leight-core/client";
import {FC} from "react";

export interface IPublicMenuProps extends Partial<IMenuProps> {
}

export const PublicMenu: FC<IPublicMenuProps> = props => <Menu
	style={{backgroundColor: "transparent", minWidth: "50vw"}}
	mode={"horizontal"}
	items={[
		CreateMenuItem({
			title: "public.home.menu",
			href: "/public",
			icon: <HomeIcon/>,
		}),
		CreateMenuItem({
			title: "public.about.menu",
			href: "/public/about",
			icon: <AboutIcon/>,
		}),
		CreateMenuItem({
			title: "public.tos.menu",
			href: "/public/tos",
			icon: <TosIcon/>,
		}),
	]}
	{...props}
/>;

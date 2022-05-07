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
		CreateMenuItem("public.home.menu", "/public", <HomeIcon/>),
		CreateMenuItem("public.about.menu", "/public/about", <AboutIcon/>),
		CreateMenuItem("public.tos.menu", "/public/tos", <TosIcon/>),
	]}
	{...props}
/>;

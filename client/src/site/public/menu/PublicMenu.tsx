import {IMenuProps, Menu} from "@/puff-smith";
import {CreateMenuItem, HomeIcon, MenuDivider, SignInIcon} from "@leight-core/leight";
import {FC} from "react";

export interface IPublicMenuProps extends Partial<IMenuProps> {
}

export const PublicMenu: FC<IPublicMenuProps> = props => {
	return <Menu {...props}>
		<MenuDivider/>
		{CreateMenuItem("public.index.menu", "/public", <HomeIcon/>)}
		{CreateMenuItem("public.sign-in.menu", "/public/sign-in", <SignInIcon/>)}
	</Menu>;
};

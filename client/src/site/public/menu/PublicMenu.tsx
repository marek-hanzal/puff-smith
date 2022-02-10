import {IMenuProps} from "@/puff-smith";
import {CreateMenuItem, HomeIcon, Menu, MenuDivider, SignInIcon, SignUpIcon} from "@leight-core/leight";
import {FC} from "react";

export interface IPublicMenuProps extends Partial<IMenuProps> {
}

export const PublicMenu: FC<IPublicMenuProps> = props => {
	return <Menu {...props}>
		<MenuDivider/>
		{CreateMenuItem("public.index.menu", "/public", <HomeIcon/>)}
		{CreateMenuItem("public.sign-in.menu", "/public/sign-in", <SignInIcon/>)}
		{CreateMenuItem("public.sign-up.menu", "/public/sign-up", <SignUpIcon/>)}
	</Menu>;
};

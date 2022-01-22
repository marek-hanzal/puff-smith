import {CreateMenuItem, HomeIcon, MenuDivider} from "@leight-core/leight";
import {FC} from "react";
import {AtomizerIcon, BuildIcon, IMenuProps, LiquidIcon, Menu, VapeIcon} from "@/puff-smith";

export interface ILabMenuProps extends Partial<IMenuProps> {
}

export const LabMenu: FC<ILabMenuProps> = props => {
	return <Menu {...props}>
		<MenuDivider/>
		{CreateMenuItem("lab.home.menu", "/lab", <HomeIcon/>)}
		<MenuDivider/>
		{CreateMenuItem("lab.build.menu", "/lab/build", <BuildIcon/>)}
		{CreateMenuItem("lab.liquid.menu", "/lab/liquid", <LiquidIcon/>)}
		{CreateMenuItem("lab.vape.menu", "/lab/vape", <VapeIcon/>)}
		{CreateMenuItem("lab.atomizer.menu", "/lab/atomizer", <AtomizerIcon/>)}
	</Menu>;
};

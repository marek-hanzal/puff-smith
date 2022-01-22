import {CreateMenuItem, HomeIcon, MenuDivider} from "@leight-core/leight";
import {FC} from "react";
import {AtomizerIcon, BuildIcon, CoilIcon, CottonIcon, IMenuProps, LiquidIcon, Menu, SteepIcon, ToolIcon, VapeIcon, VendorIcon, WireIcon} from "@/puff-smith";
import {ModIcon} from "@/puff-smith/component/icon/ModIcon";
import {CellIcon} from "@/puff-smith/component/icon/CellIcon";

export interface ILabMenuProps extends Partial<IMenuProps> {
}

export const LabMenu: FC<ILabMenuProps> = props => {
	return <Menu {...props}>
		<MenuDivider/>
		{CreateMenuItem("lab.home.menu", "/lab", <HomeIcon/>)}
		<MenuDivider/>
		{CreateMenuItem("lab.build.menu", "/lab/build", <BuildIcon/>)}
		{CreateMenuItem("lab.vape.menu", "/lab/vape", <VapeIcon/>)}
		<MenuDivider/>
		{CreateMenuItem("lab.liquid.menu", "/lab/liquid", <LiquidIcon/>)}
		{CreateMenuItem("lab.steep.menu", "/lab/steep", <SteepIcon/>)}
		<MenuDivider/>
		{CreateMenuItem("lab.atomizer.menu", "/lab/atomizer", <AtomizerIcon/>)}
		{CreateMenuItem("lab.mod.menu", "/lab/mod", <ModIcon/>)}
		{CreateMenuItem("lab.cell.menu", "/lab/cell", <CellIcon/>)}
		<MenuDivider/>
		{CreateMenuItem("lab.vendor.menu", "/lab/vendor", <VendorIcon/>)}
		{CreateMenuItem("lab.cotton.menu", "/lab/cotton", <CottonIcon/>)}
		{CreateMenuItem("lab.wire.menu", "/lab/wire", <WireIcon/>)}
		{CreateMenuItem("lab.coil.menu", "/lab/coil", <CoilIcon/>)}
		<MenuDivider/>
		{CreateMenuItem("lab.tool.menu", "/lab/tool", <ToolIcon/>)}
	</Menu>;
};

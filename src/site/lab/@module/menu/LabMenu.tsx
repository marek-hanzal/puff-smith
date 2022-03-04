import {CreateMenuItem, HomeIcon, IMenuProps, Menu, MenuDivider, useIsMobile} from "@leight-core/client";
import {FC, ReactNode} from "react";
import {AtomizerIcon, BuildIcon, CellIcon, CoilIcon, CottonIcon, LiquidIcon, MixtureIcon, ModIcon, VapeIcon, VendorIcon, WireIcon} from "@/puff-smith";

export interface ILabMenuProps extends Partial<IMenuProps> {
	prepend?: ReactNode;
}

export const LabMenu: FC<ILabMenuProps> = ({prepend, ...props}) => {
	const isMobile = useIsMobile();
	return <Menu style={{border: 'none'}} {...props}>
		{prepend ? <>{prepend}<MenuDivider/></> : null}
		{!isMobile && <>
			<MenuDivider/>
			{CreateMenuItem("lab.home.menu", "/lab", <HomeIcon/>)}
			<MenuDivider/>
		</>}
		{CreateMenuItem("lab.build.menu", "/lab/build", <BuildIcon/>)}
		{CreateMenuItem("lab.vape.menu", "/lab/vape", <VapeIcon/>)}
		{CreateMenuItem("lab.mixture.menu", "/lab/mixture", <MixtureIcon/>)}
		<MenuDivider/>
		{CreateMenuItem("lab.atomizer.menu", "/lab/atomizer", <AtomizerIcon/>)}
		{CreateMenuItem("lab.mod.menu", "/lab/mod", <ModIcon/>)}
		{CreateMenuItem("lab.cell.menu", "/lab/cell", <CellIcon/>)}
		<MenuDivider/>
		{CreateMenuItem("lab.liquid.menu", "/lab/liquid", <LiquidIcon/>)}
		{CreateMenuItem("lab.cotton.menu", "/lab/cotton", <CottonIcon/>)}
		{CreateMenuItem("lab.wire.menu", "/lab/wire", <WireIcon/>)}
		{CreateMenuItem("lab.coil.menu", "/lab/coil", <CoilIcon/>)}
		{CreateMenuItem("lab.vendor.menu", "/lab/vendor", <VendorIcon/>)}
	</Menu>;
};
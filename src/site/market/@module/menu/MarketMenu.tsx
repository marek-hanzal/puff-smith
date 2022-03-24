import {CreateMenuItem, HomeIcon, IMenuProps, Menu} from "@leight-core/client";
import {FC} from "react";
import {AtomizerIcon, CellIcon, CottonIcon, LabIcon, ModIcon, VoucherIcon} from "@/puff-smith";

export interface IMarketMenuProps extends Partial<IMenuProps> {
}

export const MarketMenu: FC<IMarketMenuProps> = props => {
	return <Menu style={{backgroundColor: 'transparent', minWidth: '50vw'}} mode={'horizontal'} {...props}>
		{CreateMenuItem("market.home.menu", "/market", <HomeIcon/>)}
		{CreateMenuItem("market.atomizer.menu", "/market/atomizer", <AtomizerIcon/>)}
		{CreateMenuItem("market.mod.menu", "/market/mod", <ModIcon/>)}
		{CreateMenuItem("market.cotton.menu", "/market/cotton", <CottonIcon/>)}
		{CreateMenuItem("market.cell.menu", "/market/cell", <CellIcon/>)}
		{CreateMenuItem("market.voucher.menu", "/market/voucher", <VoucherIcon/>)}
		{CreateMenuItem("market.lab.menu", "/lab", <LabIcon/>)}
	</Menu>;
};

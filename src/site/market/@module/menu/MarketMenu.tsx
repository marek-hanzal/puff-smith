import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {BaseIcon} from "@/puff-smith/component/icon/BaseIcon";
import {BoosterIcon} from "@/puff-smith/component/icon/BoosterIcon";
import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {CellIcon} from "@/puff-smith/component/icon/CellIcon";
import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {ModIcon} from "@/puff-smith/component/icon/ModIcon";
import {VoucherIcon} from "@/puff-smith/component/icon/VoucherIcon";
import {WireIcon} from "@/puff-smith/component/icon/WireIcon";
import {CreateMenuGroup, CreateMenuItem, HomeIcon, IMenuProps, Menu} from "@leight-core/client";
import {FC} from "react";

export interface IMarketMenuProps extends Partial<IMenuProps> {
}

export const MarketMenu: FC<IMarketMenuProps> = props => <Menu
	style={{backgroundColor: "transparent", minWidth: "50vw"}} mode={"horizontal"}
	items={[
		CreateMenuItem("market.home.menu", "/market", <HomeIcon/>),
		CreateMenuItem("market.atomizer.menu", "/market/atomizer", <AtomizerIcon/>),
		CreateMenuItem("market.mod.menu", "/market/mod", <ModIcon/>),
		CreateMenuItem("market.cell.menu", "/market/cell", <CellIcon/>),
		CreateMenuGroup("market.build.menu", <BuildIcon/>, [
			CreateMenuItem("market.cotton.menu", "/market/cotton", <CottonIcon/>),
			CreateMenuItem("market.wire.menu", "/market/wire", <WireIcon/>),
		]),
		CreateMenuGroup("market.liquid.menu", <LiquidIcon/>, [
			CreateMenuItem("market.aroma.menu", "/market/aroma", <LiquidIcon/>),
			CreateMenuItem("market.base.menu", "/market/base", <BaseIcon/>),
			CreateMenuItem("market.booster.menu", "/market/booster", <BoosterIcon/>),
		]),
		CreateMenuItem("market.voucher.menu", "/market/voucher", <VoucherIcon/>),
		CreateMenuItem("market.lab.menu", "/to/lab", <LabIcon/>),
	]}
	{...props}
/>;

import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {BaseIcon} from "@/puff-smith/component/icon/BaseIcon";
import {BoosterIcon} from "@/puff-smith/component/icon/BoosterIcon";
import {CellIcon} from "@/puff-smith/component/icon/CellIcon";
import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {ModIcon} from "@/puff-smith/component/icon/ModIcon";
import {hasToken} from "@/puff-smith/service/user/utils";
import {useWhoamiQuery} from "@/sdk/api/user/whoami";
import {SlidersOutlined} from "@ant-design/icons";
import {CreateMenuGroup, CreateMenuItem, HomeIcon, IMenuProps, Menu} from "@leight-core/client";
import {FC} from "react";

export interface IInventoryMenuProps extends Partial<IMenuProps> {
}

export const InventoryMenu: FC<IInventoryMenuProps> = props => {
	const whoamiQuery = useWhoamiQuery();
	return <Menu
		style={{backgroundColor: "transparent", minWidth: "50vw"}}
		mode={"horizontal"}
		items={[
			CreateMenuItem("inventory.home.menu", "/inventory", <HomeIcon/>),
			CreateMenuGroup("inventory.liquid.menu", <LiquidIcon/>, [
				CreateMenuItem("inventory.aroma.menu", "/inventory/aroma", <LiquidIcon/>),
				CreateMenuItem("inventory.base.menu", "/inventory/base", <BaseIcon/>),
				CreateMenuItem("inventory.booster.menu", "/inventory/booster", <BoosterIcon/>),
			]),
			CreateMenuGroup("inventory.hardware.menu", <LiquidIcon/>, [
				CreateMenuItem("inventory.atomizer.menu", "/inventory/atomizer", <AtomizerIcon/>),
				CreateMenuItem("inventory.mod.menu", "/inventory/mod", <ModIcon/>),
				CreateMenuItem("inventory.cell.menu", "/inventory/cell", <CellIcon/>),
			]),
			CreateMenuItem("inventory.cotton.menu", "/inventory/cotton", <CottonIcon/>),
			CreateMenuItem("inventory.lab.menu", "/to/lab", <LabIcon/>),
			CreateMenuItem("inventory.market.menu", "/to/market", <MarketIcon/>),
			whoamiQuery.isSuccess && hasToken(whoamiQuery.data, "site.root") ? CreateMenuItem("inventory.root.home.menu", "/to/root", <SlidersOutlined/>) : null,
		]}
		{...props}
	/>;
};

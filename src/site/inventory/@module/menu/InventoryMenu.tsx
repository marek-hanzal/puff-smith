import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {BaseIcon} from "@/puff-smith/component/icon/BaseIcon";
import {BoosterIcon} from "@/puff-smith/component/icon/BoosterIcon";
import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {CellIcon} from "@/puff-smith/component/icon/CellIcon";
import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {ModIcon} from "@/puff-smith/component/icon/ModIcon";
import {WireIcon} from "@/puff-smith/component/icon/WireIcon";
import {SlidersOutlined} from "@ant-design/icons";
import {CreateMenuGroup, CreateMenuItem, HomeIcon, IMenuProps, Menu, useUserContext} from "@leight-core/client";
import {FC} from "react";

export interface IInventoryMenuProps extends Partial<IMenuProps> {
}

export const InventoryMenu: FC<IInventoryMenuProps> = props => {
	const userContext = useUserContext();
	return <Menu
		style={{backgroundColor: "transparent", minWidth: "50vw"}}
		mode={"horizontal"}
		items={[
			CreateMenuItem({
				title: "inventory.home.menu",
				href: "/inventory",
				icon: <HomeIcon/>,
			}),
			CreateMenuGroup({
				title: "inventory.liquid.menu",
				icon: <LiquidIcon/>,
				items: [
					CreateMenuItem({
						title: "inventory.aroma.menu",
						href: "/inventory/aroma",
						icon: <LiquidIcon/>,
					}),
					CreateMenuItem({
						title: "inventory.base.menu",
						href: "/inventory/base",
						icon: <BaseIcon/>,
					}),
					CreateMenuItem({
						title: "inventory.booster.menu",
						href: "/inventory/booster",
						icon: <BoosterIcon/>,
					}),
				],
			}),
			CreateMenuGroup({
				title: "inventory.build.menu",
				icon: <BuildIcon/>,
				items: [
					CreateMenuItem({
						title: "inventory.cotton.menu",
						href: "/inventory/cotton",
						icon: <CottonIcon/>,
					}),
					CreateMenuItem({
						title: "inventory.wire.menu",
						href: "/inventory/wire",
						icon: <WireIcon/>,
					}),
				],
			}),
			CreateMenuGroup({
				title: "inventory.hardware.menu",
				icon: <LiquidIcon/>,
				items: [
					CreateMenuItem({
						title: "inventory.atomizer.menu",
						href: "/inventory/atomizer",
						icon: <AtomizerIcon/>,
					}),
					CreateMenuItem({
						title: "inventory.mod.menu",
						href: "/inventory/mod",
						icon: <ModIcon/>,
					}),
					CreateMenuItem({
						title: "inventory.cell.menu",
						href: "/inventory/cell",
						icon: <CellIcon/>,
					}),
				],
			}),
			CreateMenuItem({
				title: "inventory.lab.menu",
				href: "/to/lab",
				icon: <LabIcon/>,
			}),
			CreateMenuItem({
				title: "inventory.market.menu",
				href: "/to/market",
				icon: <MarketIcon/>,
			}),
			userContext.user.hasAny(["site.root", "*"]) ? CreateMenuItem({
				title: "inventory.root.home.menu",
				href: "/to/root",
				icon: <SlidersOutlined/>,
			}) : null,
		]}
		{...props}
	/>;
};

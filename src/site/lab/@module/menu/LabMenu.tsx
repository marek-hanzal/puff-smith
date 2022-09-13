import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {InventoryIcon} from "@/puff-smith/component/icon/InventoryIcon";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {SlidersOutlined} from "@ant-design/icons";
import {BrowserContent, CreateMenuItem, IMenuProps, Menu, MobileMenu, useUserContext} from "@leight-core/client";
import {FC} from "react";

export interface ILabMenuProps extends Partial<IMenuProps> {
}

export const LabMenu: FC<ILabMenuProps> = props => {
	const userContext = useUserContext();
	return <>
		<BrowserContent>
			<Menu
				style={{backgroundColor: "transparent", minWidth: "50vw"}}
				mode={"horizontal"}
				items={[
					CreateMenuItem({
						title: "lab.build.menu",
						href: "/lab/build",
						icon: <BuildIcon/>,
					}),
					CreateMenuItem({
						title: "lab.liquid.menu",
						href: "/lab/liquid",
						icon: <LiquidIcon/>,
					}),
					CreateMenuItem({
						title: "lab.market.menu",
						href: "/to/market",
						icon: <MarketIcon/>,
					}),
					CreateMenuItem({
						title: "lab.inventory.menu",
						href: "/to/inventory",
						icon: <InventoryIcon/>,
					}),
					userContext.user.hasAny(["site.root", "*"]) ? CreateMenuItem({
						title: "inventory.root.home.menu",
						href: "/to/root",
						icon: <SlidersOutlined/>,
					}) : null,
				]}
				{...props}
			/>
		</BrowserContent>
		<MobileMenu
			items={[
				{
					label: "lab.build.menu",
					href: "/lab/build",
					icon: <BuildIcon/>,
				},
				{
					label: "lab.liquid.menu",
					href: "/lab/liquid",
					icon: <LiquidIcon/>,
				},
			]}
		/>
	</>;
};

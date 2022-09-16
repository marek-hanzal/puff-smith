import {InventoryIcon} from "@/puff-smith/component/icon/InventoryIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {SlidersOutlined} from "@ant-design/icons";
import {TabBarMenu, useUserContext} from "@leight-core/client";
import {FC} from "react";

export interface IMobileMenuProps {
}

export const MobileMenu: FC<IMobileMenuProps> = () => {
	const userContext = useUserContext();
	return <TabBarMenu
		items={[
			{
				icon: <LabIcon/>,
				href: "/lab",
			},
			{
				icon: <MarketIcon/>,
				href: "/market",
			},
			{
				icon: <InventoryIcon/>,
				href: "/inventory",
			},
			userContext.user.hasAny(["site.root", "*"]) ? {
				icon: <SlidersOutlined/>,
				href: "/root",
			} : null,
		]}
	/>;
};

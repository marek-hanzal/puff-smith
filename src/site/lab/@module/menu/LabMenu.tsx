import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {BaseIcon} from "@/puff-smith/component/icon/BaseIcon";
import {BoosterIcon} from "@/puff-smith/component/icon/BoosterIcon";
import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {CellIcon} from "@/puff-smith/component/icon/CellIcon";
import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {ModIcon} from "@/puff-smith/component/icon/ModIcon";
import {VapeIcon} from "@/puff-smith/component/icon/VapeIcon";
import {hasToken} from "@/puff-smith/service/user/utils";
import {useWhoamiQuery} from "@/sdk/api/user/whoami";
import {ContainerOutlined, SlidersOutlined} from "@ant-design/icons";
import {CreateMenuItem, HomeIcon, IMenuProps, Menu, SubMenu} from "@leight-core/client";
import {FC} from "react";

export interface ILabMenuProps extends Partial<IMenuProps> {
}

export const LabMenu: FC<ILabMenuProps> = props => {
	const whoamiQuery = useWhoamiQuery();
	return <Menu style={{backgroundColor: "transparent", minWidth: "50vw"}} mode={"horizontal"} {...props}>
		{CreateMenuItem("lab.home.menu", "/lab", <HomeIcon/>)}
		{CreateMenuItem("lab.build.menu", "/lab/build", <BuildIcon/>)}
		{CreateMenuItem("lab.vape.menu", "/lab/vape", <VapeIcon/>)}
		{CreateMenuItem("lab.liquid.menu", "/lab/liquid", <LiquidIcon/>)}
		<SubMenu key={"lab.inventory"} icon={<ContainerOutlined/>} id={"lab.inventory"}>
			{CreateMenuItem("lab.atomizer.inventory.menu", "/lab/atomizer/inventory", <AtomizerIcon/>)}
			{CreateMenuItem("lab.mod.inventory.menu", "/lab/mod/inventory", <ModIcon/>)}
			{CreateMenuItem("lab.cell.inventory.menu", "/lab/cell/inventory", <CellIcon/>)}
			{CreateMenuItem("lab.cotton.inventory.menu", "/lab/cotton/inventory", <CottonIcon/>)}
			{CreateMenuItem("lab.aroma.inventory.menu", "/lab/aroma/inventory", <LiquidIcon/>)}
			{CreateMenuItem("lab.base.inventory.menu", "/lab/base/inventory", <BaseIcon/>)}
			{CreateMenuItem("lab.booster.inventory.menu", "/lab/booster/inventory", <BoosterIcon/>)}
		</SubMenu>
		{CreateMenuItem("lab.market.menu", "/market", <MarketIcon/>)}
		{whoamiQuery.isSuccess && hasToken(whoamiQuery.data, "site.root") && CreateMenuItem("lab.root.home.menu", "/root", <SlidersOutlined/>)}
	</Menu>;
};

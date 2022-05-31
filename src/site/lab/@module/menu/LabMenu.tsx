import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {InventoryIcon} from "@/puff-smith/component/icon/InventoryIcon";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {hasToken} from "@/puff-smith/service/user/utils";
import {useWhoamiQuery} from "@/sdk/api/user/whoami";
import {SlidersOutlined} from "@ant-design/icons";
import {CreateMenuItem, HomeIcon, IMenuProps, Menu} from "@leight-core/client";
import {FC} from "react";

export interface ILabMenuProps extends Partial<IMenuProps> {
}

export const LabMenu: FC<ILabMenuProps> = props => {
	const whoamiQuery = useWhoamiQuery();
	return <Menu
		style={{backgroundColor: "transparent", minWidth: "50vw"}}
		mode={"horizontal"}
		items={[
			CreateMenuItem("lab.home.menu", "/lab", <HomeIcon/>),
			CreateMenuItem("lab.build.menu", "/lab/build", <BuildIcon/>),
			CreateMenuItem("lab.liquid.menu", "/lab/liquid", <LiquidIcon/>),
			CreateMenuItem("lab.mixture.menu", "/lab/mixture", <MixtureIcon/>),
			CreateMenuItem("lab.inventory.menu", "/to/inventory", <InventoryIcon/>),
			CreateMenuItem("lab.market.menu", "/to/market", <MarketIcon/>),
			whoamiQuery.isSuccess && hasToken(whoamiQuery.data, "site.root") ? CreateMenuItem("lab.root.home.menu", "/to/root", <SlidersOutlined/>) : null,
		]}
		{...props}
	/>;
};

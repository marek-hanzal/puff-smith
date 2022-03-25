import {CreateMenuItem, HomeIcon, IMenuProps, Menu, SubMenu} from "@leight-core/client";
import {FC} from "react";
import {AtomizerIcon, BaseIcon, BoosterIcon, BuildIcon, CellIcon, CottonIcon, LiquidIcon, ModIcon, VapeIcon} from "@/puff-smith";
import {ContainerOutlined, SlidersOutlined} from "@ant-design/icons";
import {useWhoamiQuery} from "@/sdk/api/user/whoami";
import {hasToken} from "@/puff-smith/service/user/utils";

export interface ILabMenuProps extends Partial<IMenuProps> {
}

export const LabMenu: FC<ILabMenuProps> = props => {
	const whoamiQuery = useWhoamiQuery();
	console.log('query', whoamiQuery.data);
	return <Menu style={{backgroundColor: 'transparent', minWidth: '50vw'}} mode={'horizontal'} {...props}>
		{CreateMenuItem("lab.home.menu", "/lab", <HomeIcon/>)}
		{CreateMenuItem("lab.build.menu", "/lab/build", <BuildIcon/>)}
		{CreateMenuItem("lab.vape.menu", "/lab/vape", <VapeIcon/>)}
		{CreateMenuItem("lab.liquid.menu", "/lab/liquid", <LiquidIcon/>)}
		<SubMenu key={'lab.inventory'} icon={<ContainerOutlined/>} id={'lab.inventory'}>
			{CreateMenuItem("lab.inventory.atomizer.menu", "/lab/inventory/atomizer", <AtomizerIcon/>)}
			{CreateMenuItem("lab.inventory.mod.menu", "/lab/inventory/mod", <ModIcon/>)}
			{CreateMenuItem("lab.inventory.cell.menu", "/lab/inventory/cell", <CellIcon/>)}
			{CreateMenuItem("lab.inventory.cotton.menu", "/lab/inventory/cotton", <CottonIcon/>)}
			{CreateMenuItem("lab.inventory.aroma.menu", "/lab/inventory/aroma", <LiquidIcon/>)}
			{CreateMenuItem("lab.inventory.base.menu", "/lab/inventory/base", <BaseIcon/>)}
			{CreateMenuItem("lab.inventory.booster.menu", "/lab/inventory/booster", <BoosterIcon/>)}
		</SubMenu>
		{whoamiQuery.isSuccess && hasToken(whoamiQuery.data, 'root') && CreateMenuItem("lab.root.home.menu", "/root", <SlidersOutlined/>)}
	</Menu>;
};

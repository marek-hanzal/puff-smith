import {InventoryIcon} from "@/puff-smith/component/icon/InventoryIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {MobileContent, useNavigate} from "@leight-core/client";
import {TabBar} from "antd-mobile";
import {FC} from "react";

export interface IMobileMenuProps {
	active?: string;
}

export const MobileMenu: FC<IMobileMenuProps> = ({active}) => {
	const navigate = useNavigate();
	return <MobileContent>
		<TabBar defaultActiveKey={active} onChange={href => navigate(href)}>
			<TabBar.Item key={"/lab"} icon={<LabIcon/>}/>
			<TabBar.Item key={"/inventory"} icon={<InventoryIcon/>}/>
			<TabBar.Item key={"/market"} icon={<MarketIcon/>}/>
		</TabBar>
	</MobileContent>;
};

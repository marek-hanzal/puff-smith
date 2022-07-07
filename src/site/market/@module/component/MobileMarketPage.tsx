import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {MobileMenu} from "@/puff-smith/site/shared/@mobile/menu/MobileMenu";
import {IMobilePageProps, MobilePage} from "@leight-core/client";
import {FC} from "react";

export interface IMobileMarketPageProps extends IMobilePageProps {
}

export const MobileMarketPage: FC<IMobileMarketPageProps> = ({menuSelection, ...props}) => {
	menuSelection = ["/market"].concat(menuSelection || []);
	return <MobilePage
		title={"market.index"}
		icon={<MarketIcon/>}
		menuSelection={menuSelection}
		footer={<MobileMenu/>}
		{...props}
	/>;
};

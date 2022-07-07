import {InventoryIcon} from "@/puff-smith/component/icon/InventoryIcon";
import {MobileMenu} from "@/puff-smith/site/shared/@mobile/menu/MobileMenu";
import {IMobilePageProps, MobilePage} from "@leight-core/client";
import {FC} from "react";

export interface IMobileInventoryPageProps extends IMobilePageProps {
}

/**
 * This page is the common page for all inventory related pages.
 */
export const MobileInventoryPage: FC<IMobileInventoryPageProps> = props => {
	return <MobilePage
		icon={<InventoryIcon/>}
		title={"inventory.index"}
		menuSelection={["/inventory"]}
		footer={<MobileMenu/>}
		{...props}
	/>;
};

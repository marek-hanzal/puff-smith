import {LabIcon}    from "@/puff-smith/component/icon/LabIcon";
import {MobileMenu} from "@/puff-smith/site/shared/@mobile/menu/MobileMenu";
import {
    IMobilePageProps,
    MobilePage
}                   from "@leight-core/viv";
import {FC}         from "react";

export interface IMobileLabPageProps extends IMobilePageProps {
}

/**
 * This page is the common page for all lab related pages.
 */
export const MobileLabPage: FC<IMobileLabPageProps> = ({menuSelection, ...props}) => {
	menuSelection = ["/lab"].concat(menuSelection || []);
	return <MobilePage
		icon={<LabIcon/>}
		title={"lab.index"}
		menuSelection={menuSelection}
		footer={<MobileMenu/>}
		{...props}
	/>;
};

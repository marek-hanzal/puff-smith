import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {MobileMenu} from "@/puff-smith/site/shared/@mobile/menu/MobileMenu";
import {IMobilePageProps, MobilePage} from "@leight-core/client";
import {FC} from "react";

export interface IMobileLabPageProps extends IMobilePageProps {
}

/**
 * This page is the common page for all lab related pages.
 */
export const MobileLabPage: FC<IMobileLabPageProps> = props => {
	return <MobilePage
		icon={<LabIcon/>}
		title={"lab.index"}
		menuSelection={["/lab"]}
		footer={<MobileMenu/>}
		{...props}
	/>;
};

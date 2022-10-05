import {MobileMenu}      from "@/puff-smith/site/shared/@mobile/menu/MobileMenu";
import {SlidersOutlined} from "@ant-design/icons";
import {
	IMobilePageProps,
	MobilePage
}                        from "@leight-core/client";
import {FC}              from "react";

export interface IMobileRootPageProps extends IMobilePageProps {
}

export const MobileRootPage: FC<IMobileRootPageProps> = ({menuSelection, ...props}) => {
	menuSelection = ["/root"].concat(menuSelection || []);
	return <MobilePage
		title={"root.index"}
		icon={<SlidersOutlined/>}
		menuSelection={menuSelection}
		footer={<MobileMenu/>}
		{...props}
	/>;
};

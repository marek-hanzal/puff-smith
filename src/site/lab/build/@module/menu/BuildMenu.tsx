import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {CreateMenuItem, IMenuProps, Menu} from "@leight-core/client";
import {FC} from "react";

export interface IBuildMenuProps extends Partial<IMenuProps> {
}

export const BuildMenu: FC<IBuildMenuProps> = props => {
	return <Menu
		style={{border: "none"}}
		mode={"horizontal"}
		items={[
			CreateMenuItem({
				title: "lab.build.build.menu",
				href: "/lab/build/[buildId]",
				icon: <BuildIcon/>,
			}),
		]}
		{...props}
	/>;
};

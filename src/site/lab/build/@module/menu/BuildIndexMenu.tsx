import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {CellIcon} from "@/puff-smith/component/icon/CellIcon";
import {CoilIcon} from "@/puff-smith/component/icon/CoilIcon";
import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {IBuild} from "@/puff-smith/service/build/interface";
import {CommentOutlined} from "@ant-design/icons";
import {CreateMenuItem, IMenuProps, Menu} from "@leight-core/client";
import {FC} from "react";

export interface IBuildIndexMenuProps extends Partial<IMenuProps> {
	build: IBuild;
}

export const BuildIndexMenu: FC<IBuildIndexMenuProps> = ({build, ...props}) => {
	const query = {buildId: build.id};
	return <Menu
		style={{border: "none"}}
		mode={"horizontal"}
		items={[
			CreateMenuItem({
				title: "lab.build.build.menu",
				href: "/lab/build/[buildId]",
				icon: <BuildIcon/>,
				query,
			}),
			CreateMenuItem({
				title: "lab.build.liquid.menu",
				href: "/lab/build/[buildId]/liquid",
				icon: <LiquidIcon/>,
				query,
			}),
			CreateMenuItem({
				title: "lab.build.atomizer.menu",
				href: "/lab/build/[buildId]/atomizer",
				icon: <AtomizerIcon/>,
				query,
			}),
			CreateMenuItem({
				title: "lab.build.coil.menu",
				href: "/lab/build/[buildId]/coil",
				icon: <CoilIcon/>,
				query,
			}),
			CreateMenuItem({
				title: "lab.build.cells.menu",
				href: "/lab/build/[buildId]/cells",
				icon: <CellIcon/>,
				query,
			}),
			CreateMenuItem({
				title: "lab.build.cotton.menu",
				href: "/lab/build/[buildId]/cotton",
				icon: <CottonIcon/>,
				query,
			}),
			CreateMenuItem({
				title: "lab.build.comment.menu",
				href: "/lab/build/[buildId]/comment",
				icon: <CommentOutlined/>,
				query,
			}),
		]}
		{...props}
	/>;
};

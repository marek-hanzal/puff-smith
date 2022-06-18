import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
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
			CreateMenuItem("lab.build.build.menu", "/lab/build/[buildId]", <BuildIcon/>, query),
			CreateMenuItem("lab.build.liquid.menu", "/lab/build/[buildId]/liquid", <LiquidIcon/>, query),
			CreateMenuItem("lab.build.atomizer.menu", "/lab/build/[buildId]/atomizer", <AtomizerIcon/>, query),
			CreateMenuItem("lab.build.coil.menu", "/lab/build/[buildId]/coil", <CoilIcon/>, query),
			CreateMenuItem("lab.build.cotton.menu", "/lab/build/[buildId]/cotton", <CottonIcon/>, query),
			CreateMenuItem("lab.build.comment.menu", "/lab/build/[buildId]/comment", <CommentOutlined/>, query),
		]}
		{...props}
	/>;
};

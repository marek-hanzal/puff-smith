import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {IBuild} from "@/puff-smith/service/build/interface";
import {CommentOutlined} from "@ant-design/icons";
import {CreateMenuItem, IMenuProps, Menu} from "@leight-core/client";
import {FC} from "react";

export const BuildIndexMenuWidth = 16.2;

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
			CreateMenuItem("lab.build.comment.menu", "/lab/build/[buildId]/comment", <CommentOutlined/>, query),
		]}
		{...props}
	/>;
};

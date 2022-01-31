import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {Menu} from "antd";
import {BuildActiveButton, BuildCloneButton, BuildEditButton, BuildLinkButton, BuildPreviewButton} from "@/puff-smith/site/lab/build";
import {IQuickMenuProps, QuickMenu} from "@leight-core/leight/dist";

export interface IBuildQuickMenu extends Partial<IQuickMenuProps> {
	build: BuildDto;
}

export const BuildQuickMenu: FC<IBuildQuickMenu> = ({build, ...props}) => {
	return <QuickMenu {...props}>
		<Menu.Item>
			<BuildPreviewButton build={build}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<BuildLinkButton build={build}/>
		</Menu.Item>
		<Menu.Item>
			<BuildEditButton build={build}/>
		</Menu.Item>
		<Menu.Item>
			<BuildCloneButton build={build}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<BuildActiveButton build={build}/>
		</Menu.Item>
	</QuickMenu>;
}

import {IQuickMenuProps, QuickMenu} from "@leight-core/leight/dist";
import {FC} from "react";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {Menu} from "antd";
import {CoilCloneButton, CoilEditButton, CoilLinkButton, CoilPreviewButton} from "@/puff-smith/site/lab/coil";

export interface ICoilQuickMenuProps extends Partial<IQuickMenuProps> {
	coil: CoilDto;
}

export const CoilQuickMenu: FC<ICoilQuickMenuProps> = ({coil, ...props}) => {
	return <QuickMenu {...props}>
		<Menu.Item>
			<CoilPreviewButton coil={coil}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<CoilLinkButton coil={coil}/>
		</Menu.Item>
		<Menu.Item>
			<CoilEditButton coil={coil}/>
		</Menu.Item>
		<Menu.Item>
			<CoilCloneButton coil={coil}/>
		</Menu.Item>
	</QuickMenu>
}

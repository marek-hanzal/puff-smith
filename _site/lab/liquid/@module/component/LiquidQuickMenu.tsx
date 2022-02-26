import {FC} from "react";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {Menu} from "antd";
import {useTranslation} from "react-i18next";
import {DrawerMenu, IDrawerMenuProps} from "@leight-core/common";
import {LiquidPreviewButton} from "./button/LiquidPreviewButton";
import {LiquidCommentButton} from "./button/LiquidCommentButton";
import {LiquidEditButton} from "./button/LiquidEditButton";
import {LiquidDeleteButton} from "./button/LiquidDeleteButton";

export interface ILiquidQuickMenuProps extends Partial<IDrawerMenuProps> {
	liquid: LiquidDto;
}

export const LiquidQuickMenu: FC<ILiquidQuickMenuProps> = ({liquid, ...props}) => {
	const {t} = useTranslation();
	return <DrawerMenu
		header={t('lab.liquid.context.menu', {data: liquid})}
		{...props}
	>
		<Menu.Item>
			<LiquidPreviewButton liquid={liquid}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<LiquidCommentButton liquid={liquid}/>
		</Menu.Item>
		<Menu.Item>
			<LiquidEditButton liquid={liquid}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<LiquidDeleteButton liquid={liquid}/>
		</Menu.Item>
	</DrawerMenu>
}

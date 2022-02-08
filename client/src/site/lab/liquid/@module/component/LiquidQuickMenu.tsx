import {FC} from "react";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {Menu} from "antd";
import {LiquidCommentButton, LiquidDeleteButton, LiquidEditButton, LiquidLinkButton, LiquidPreviewButton} from "@/puff-smith/site/lab/liquid";
import {useTranslation} from "react-i18next";
import {DrawerMenu, IDrawerMenuProps} from "@leight-core/leight";

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
			<LiquidLinkButton liquid={liquid}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<LiquidPreviewButton liquid={liquid}/>
		</Menu.Item>
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

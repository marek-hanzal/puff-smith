import {FC} from "react";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {Menu} from "antd";
import {useTranslation} from "react-i18next";
import {DrawerMenu, IDrawerMenuProps} from "@leight-core/common";
import {LiquidPreviewButton} from "@/puff-smith/site/lab/liquid/@module/component/button/LiquidPreviewButton";
import {LiquidCommentButton} from "@/puff-smith/site/lab/liquid/@module/component/button/LiquidCommentButton";
import {LiquidEditButton} from "@/puff-smith/site/lab/liquid/@module/component/button/LiquidEditButton";
import {LiquidDeleteButton} from "@/puff-smith/site/lab/liquid/@module/component/button/LiquidDeleteButton";

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

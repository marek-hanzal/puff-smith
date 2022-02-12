import {FC} from "react";
import {CottonDto} from "@/sdk/puff-smith/cotton/dto";
import {Menu} from "antd";
import {useTranslation} from "react-i18next";
import {DrawerMenu, IDrawerMenuProps} from "@leight-core/leight";
import {CottonPreviewButton} from "@/puff-smith/site/lab/cotton/@module/component/button/CottonPreviewButton";
import {CottonEditButton} from "@/puff-smith/site/lab/cotton/@module/component/button/CottonEditButton";
import {CottonDeleteButton} from "@/puff-smith/site/lab/cotton/@module/component/button/CottonDeleteButton";

export interface ICottonQuickMenuProps extends Partial<IDrawerMenuProps> {
	cotton: CottonDto;
}

export const CottonQuickMenu: FC<ICottonQuickMenuProps> = ({cotton, ...props}) => {
	const {t} = useTranslation();
	return <DrawerMenu
		header={t('lab.cotton.context.menu', {data: cotton})}
		{...props}
	>
		<Menu.Item>
			<CottonPreviewButton cotton={cotton}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<CottonEditButton cotton={cotton}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<CottonDeleteButton cotton={cotton}/>
		</Menu.Item>
	</DrawerMenu>
}

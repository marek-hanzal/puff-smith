import {FC} from "react";
import {CottonDto} from "@/sdk/puff-smith/cotton/dto";
import {Menu} from "antd";
import {CottonDeleteButton, CottonEditButton, CottonPreviewButton} from "@/puff-smith/site/lab/cotton";
import {useTranslation} from "react-i18next";
import {DrawerMenu, IDrawerMenuProps} from "@leight-core/leight";

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

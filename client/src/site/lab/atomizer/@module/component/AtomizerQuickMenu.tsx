import {FC} from "react";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {Menu} from "antd";
import {AtomizerDeleteButton, AtomizerEditButton, AtomizerLinkButton, AtomizerPreviewButton} from "@/puff-smith/site/lab/atomizer";
import {useTranslation} from "react-i18next";
import {DrawerMenu, IDrawerMenuProps} from "@leight-core/leight";

export interface IAtomizerQuickMenuProps extends Partial<IDrawerMenuProps> {
	atomizer: AtomizerDto;
}

export const AtomizerQuickMenu: FC<IAtomizerQuickMenuProps> = ({atomizer, ...props}) => {
	const {t} = useTranslation();
	return <DrawerMenu
		header={t('lab.atomizer.context.menu', {data: atomizer})}
		{...props}
	>
		<Menu.Item>
			<AtomizerLinkButton atomizer={atomizer}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<AtomizerPreviewButton atomizer={atomizer}/>
		</Menu.Item>
		<Menu.Item>
			<AtomizerEditButton atomizer={atomizer}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<AtomizerDeleteButton atomizer={atomizer}/>
		</Menu.Item>
	</DrawerMenu>
}

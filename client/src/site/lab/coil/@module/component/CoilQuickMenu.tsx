import {FC} from "react";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {Menu} from "antd";
import {useTranslation} from "react-i18next";
import {DrawerMenu, IDrawerMenuProps} from "@leight-core/leight";
import {CoilPreviewButton} from "@/puff-smith/site/lab/coil/@module/component/button/CoilPreviewButton";
import {CoilEditButton} from "@/puff-smith/site/lab/coil/@module/component/button/CoilEditButton";
import {CoilDeleteButton} from "@/puff-smith/site/lab/coil/@module/component/button/CoilDeleteButton";

export interface ICoilQuickMenuProps extends Partial<IDrawerMenuProps> {
	coil: CoilDto;
}

export const CoilQuickMenu: FC<ICoilQuickMenuProps> = ({coil, ...props}) => {
	const {t} = useTranslation();
	return <DrawerMenu
		header={t('lab.coil.context.menu', {data: coil})}
		{...props}
	>
		<Menu.Item>
			<CoilPreviewButton coil={coil}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<CoilEditButton coil={coil}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<CoilDeleteButton coil={coil}/>
		</Menu.Item>
	</DrawerMenu>
}

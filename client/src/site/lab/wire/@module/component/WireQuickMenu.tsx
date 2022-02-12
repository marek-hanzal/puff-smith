import {FC} from "react";
import {WireDto} from "@/sdk/puff-smith/wire/dto";
import {Menu} from "antd";
import {WireDeleteButton, WireEditButton, WirePreviewButton} from "@/puff-smith/site/lab/wire";
import {useTranslation} from "react-i18next";
import {DrawerMenu, IDrawerMenuProps} from "@leight-core/leight";

export interface IWireQuickMenuProps extends Partial<IDrawerMenuProps> {
	wire: WireDto;
}

export const WireQuickMenu: FC<IWireQuickMenuProps> = ({wire, ...props}) => {
	const {t} = useTranslation();
	return <DrawerMenu
		header={t('lab.wire.context.menu', {data: wire})}
		{...props}
	>
		<Menu.Item>
			<WirePreviewButton wire={wire}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<WireEditButton wire={wire}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<WireDeleteButton wire={wire}/>
		</Menu.Item>
	</DrawerMenu>
}

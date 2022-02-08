import {FC} from "react";
import {Menu} from "antd";
import {MixtureActiveButton, MixtureCommentButton, MixtureEditButton, MixtureLinkButton, MixturePreviewButton} from "@/puff-smith/site/lab/mixture";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {DrawerMenu, IDrawerMenuProps} from "@leight-core/leight";
import {useTranslation} from "react-i18next";

export interface IMixtureQuickMenuProps extends Partial<IDrawerMenuProps> {
	mixture: MixtureDto;
}

export const MixtureQuickMenu: FC<IMixtureQuickMenuProps> = ({mixture, ...props}) => {
	const {t} = useTranslation();
	return <DrawerMenu
		header={t('lab.mixture.context.menu', {data: mixture})}
		{...props}
	>
		<Menu.Item>
			<MixtureLinkButton mixture={mixture}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<MixturePreviewButton mixture={mixture}/>
		</Menu.Item>
		<Menu.Item>
			<MixtureCommentButton mixture={mixture}/>
		</Menu.Item>
		<Menu.Item>
			<MixtureEditButton mixture={mixture}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<MixtureActiveButton mixture={mixture}/>
		</Menu.Item>
	</DrawerMenu>
}

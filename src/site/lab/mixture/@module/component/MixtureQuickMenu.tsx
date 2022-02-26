import {FC} from "react";
import {Menu} from "antd";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {DrawerMenu, IDrawerMenuProps} from "@leight-core/common";
import {useTranslation} from "react-i18next";
import {MixturePreviewButton} from "@/puff-smith/site/lab/mixture/@module/component/button/MixturePreviewButton";
import {MixtureCommentButton} from "@/puff-smith/site/lab/mixture/@module/component/button/MixtureCommentButton";
import {MixtureEditButton} from "@/puff-smith/site/lab/mixture/@module/component/button/MixtureEditButton";
import {MixtureActiveButton} from "@/puff-smith/site/lab/mixture/@module/component/button/MixtureActiveButton";
import {LiquidPreviewButton} from "@/puff-smith/site/lab/liquid/@module/component/button/LiquidPreviewButton";

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
			<MixturePreviewButton mixture={mixture}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<MixtureCommentButton mixture={mixture}/>
		</Menu.Item>
		<Menu.Item>
			<MixtureEditButton mixture={mixture}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<LiquidPreviewButton liquid={mixture.liquid}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<MixtureActiveButton mixture={mixture}/>
		</Menu.Item>
	</DrawerMenu>
}

import {FC} from "react";
import {useTranslation} from "react-i18next";
import {Menu} from "antd";
import {VapeCloneButton, VapeCommentButton, VapeDeleteButton, VapeEditButton, VapeLinkButton, VapePreviewButton, VapeRateButton} from "@/puff-smith/site/lab/vape";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {DrawerMenu, IDrawerMenuProps} from "@leight-core/leight";
import {BuildPreviewButton} from "@/puff-smith/site/lab/build";
import {MixturePreviewButton} from "@/puff-smith/site/lab/mixture";

export interface IVapeQuickMenuProps extends Partial<IDrawerMenuProps> {
	vape: VapeDto;
}

export const VapeQuickMenu: FC<IVapeQuickMenuProps> = ({vape, ...props}) => {
	const {t} = useTranslation();
	return <DrawerMenu
		header={t('lab.vape.context.menu', {data: vape})}
		{...props}
	>
		<Menu.Item>
			<VapeLinkButton vape={vape}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<BuildPreviewButton build={vape.build}/>
		</Menu.Item>
		<Menu.Item>
			<MixturePreviewButton mixture={vape.mixture}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<VapeRateButton vape={vape}/>
		</Menu.Item>
		<Menu.Item>
			<VapeCommentButton vape={vape}/>
		</Menu.Item>
		<Menu.Item>
			<VapePreviewButton vape={vape}/>
		</Menu.Item>
		<Menu.Item>
			<VapeEditButton vape={vape}/>
		</Menu.Item>
		<Menu.Item>
			<VapeCloneButton vape={vape}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<VapeDeleteButton vape={vape}/>
		</Menu.Item>
	</DrawerMenu>;
}

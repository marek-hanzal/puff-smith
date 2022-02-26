import {FC} from "react";
import {useTranslation} from "react-i18next";
import {Menu} from "antd";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {DrawerMenu, IDrawerMenuProps} from "@leight-core/common";
import {BuildPreviewButton} from "../../../build/@module/component/button/BuildPreviewButton";
import {AtomizerPreviewButton} from "../../../atomizer/@module/component/button/AtomizerPreviewButton";
import {VapePreviewButton} from "./button/VapePreviewButton";
import {VapeRateButton} from "./button/VapeRateButton";
import {VapeCommentButton} from "./button/VapeCommentButton";
import {VapeEditButton} from "./button/VapeEditButton";
import {VapeDeleteButton} from "./button/VapeDeleteButton";
import {MixturePreviewButton} from "../../../mixture/@module/component/button/MixturePreviewButton";
import {LiquidPreviewButton} from "../../../liquid/@module/component/button/LiquidPreviewButton";
import {CoilPreviewButton} from "../../../coil/@module/component/button/CoilPreviewButton";
import {CottonPreviewButton} from "../../../cotton/@module/component/button/CottonPreviewButton";

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
			<VapePreviewButton vape={vape}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<VapeRateButton vape={vape}/>
		</Menu.Item>
		<Menu.Item>
			<VapeCommentButton vape={vape}/>
		</Menu.Item>
		<Menu.Item>
			<VapeEditButton vape={vape}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<BuildPreviewButton build={vape.build}/>
		</Menu.Item>
		<Menu.Item>
			<AtomizerPreviewButton atomizer={vape.build.atomizer}/>
		</Menu.Item>
		<Menu.Item>
			<CoilPreviewButton coil={vape.build.coil}/>
		</Menu.Item>
		<Menu.Item>
			<CottonPreviewButton cotton={vape.build.cotton}/>
		</Menu.Item>
		<Menu.Item>
			<MixturePreviewButton mixture={vape.mixture}/>
		</Menu.Item>
		<Menu.Item>
			<LiquidPreviewButton liquid={vape.mixture.liquid}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<VapeDeleteButton vape={vape}/>
		</Menu.Item>
	</DrawerMenu>;
}

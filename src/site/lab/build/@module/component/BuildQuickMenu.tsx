import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {Menu} from "antd";
import {useTranslation} from "react-i18next";
import {DrawerMenu, IDrawerMenuProps, IFormOnSuccess} from "@leight-core/common";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {BuildPreviewButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildPreviewButton";
import {BuildVapeButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildVapeButton";
import {BuildCommentButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildCommentButton";
import {BuildEditButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildEditButton";
import {AtomizerPreviewButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerPreviewButton";
import {BuildActiveButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildActiveButton";
import {BuildDeleteButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildDeleteButton";
import {CoilPreviewButton} from "@/puff-smith/site/lab/coil/@module/component/button/CoilPreviewButton";
import {CottonPreviewButton} from "@/puff-smith/site/lab/cotton/@module/component/button/CottonPreviewButton";

export interface IBuildQuickMenuProps extends Partial<IDrawerMenuProps> {
	build: BuildDto;
	onCreateVape?: IFormOnSuccess<any, VapeDto>;
}

export const BuildQuickMenu: FC<IBuildQuickMenuProps> = ({build, onCreateVape, ...props}) => {
	const {t} = useTranslation();
	return <DrawerMenu
		header={t('lab.build.context.menu', {data: build})}
		{...props}
	>
		<Menu.Item>
			<BuildPreviewButton build={build}/>
		</Menu.Item>
		<Menu.Divider/>
		{build.active && <>
			<Menu.Item>
				<BuildVapeButton
					build={build}
					onSuccess={onCreateVape}
				/>
			</Menu.Item>
		</>}
		<Menu.Item>
			<BuildCommentButton build={build}/>
		</Menu.Item>
		<Menu.Item>
			<BuildEditButton build={build}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<AtomizerPreviewButton atomizer={build.atomizer}/>
		</Menu.Item>
		<Menu.Item>
			<CoilPreviewButton coil={build.coil}/>
		</Menu.Item>
		<Menu.Item>
			<CottonPreviewButton cotton={build.cotton}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<BuildActiveButton build={build}/>
		</Menu.Item>
		<Menu.Item>
			<BuildDeleteButton build={build}/>
		</Menu.Item>
	</DrawerMenu>;
}

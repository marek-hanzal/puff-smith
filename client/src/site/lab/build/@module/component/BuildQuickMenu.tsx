import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {Menu} from "antd";
import {BuildActiveButton, BuildCommentButton, BuildDeleteButton, BuildEditButton, BuildPreviewButton, BuildVapeButton} from "@/puff-smith/site/lab/build";
import {useTranslation} from "react-i18next";
import {DrawerMenu, IDrawerMenuProps, IFormOnSuccess} from "@leight-core/leight";
import {AtomizerPreviewButton} from "@/puff-smith/site/lab/atomizer";
import {CoilPreviewButton} from "@/puff-smith/site/lab/coil";
import {CottonPreviewButton} from "@/puff-smith/site/lab/cotton";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";

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

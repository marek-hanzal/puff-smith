import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {Menu, message} from "antd";
import {BuildActiveButton, BuildCloneButton, BuildCommentButton, BuildDeleteButton, BuildEditButton, BuildLinkButton, BuildPreviewButton, BuildVapeButton} from "@/puff-smith/site/lab/build";
import {useBuildsQueryInvalidate, useDeleteMutation} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {useTranslation} from "react-i18next";
import {DrawerMenu, IDrawerMenuProps} from "@leight-core/leight";
import {AtomizerPreviewButton} from "@/puff-smith/site/lab/atomizer";
import {CoilPreviewButton} from "@/puff-smith/site/lab/coil";
import {CottonPreviewButton} from "@/puff-smith/site/lab/cotton";

export interface IBuildQuickMenu extends Partial<IDrawerMenuProps> {
	build: BuildDto;
}

export const BuildQuickMenu: FC<IBuildQuickMenu> = ({build, ...props}) => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const buildsQueryInvalidate = useBuildsQueryInvalidate();
	return <DrawerMenu
		header={t('lab.build.context.menu', {data: build})}
		{...props}
	>
		<Menu.Item>
			<BuildLinkButton build={build}/>
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
		{build.active && <>
			<Menu.Item>
				<BuildVapeButton build={build}/>
			</Menu.Item>
		</>}
		<Menu.Item>
			<BuildCommentButton build={build}/>
		</Menu.Item>
		<Menu.Item>
			<BuildPreviewButton build={build}/>
		</Menu.Item>
		<Menu.Item>
			<BuildEditButton build={build}/>
		</Menu.Item>
		<Menu.Item>
			<BuildCloneButton build={build}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<BuildActiveButton build={build}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<BuildDeleteButton
				build={build}
				onOk={setShow => {
					deleteMutation.mutate({
						id: build.id,
					}, {
						onSuccess: () => {
							message.success(t('lab.build.deleted.success'))
							buildsQueryInvalidate();
						},
					})
					setShow(false);
				}}
			/>
		</Menu.Item>
	</DrawerMenu>;
}

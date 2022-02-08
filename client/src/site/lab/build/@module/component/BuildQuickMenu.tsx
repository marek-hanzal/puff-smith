import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {Menu, message} from "antd";
import {BuildActiveButton, BuildCloneButton, BuildCommentButton, BuildDeleteButton, BuildEditButton, BuildLinkButton, BuildPreviewButton, BuildVapeButton} from "@/puff-smith/site/lab/build";
import {useBuildsQueryInvalidate, useDeleteMutation} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {useTranslation} from "react-i18next";
import {DrawerMenu, IDrawerMenuProps} from "@leight-core/leight";

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
		{build.active && <>
			<Menu.Divider/>
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

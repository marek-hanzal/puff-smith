import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {Menu, message} from "antd";
import {BuildActiveButton, BuildCloneButton, BuildDeleteButton, BuildEditButton, BuildLinkButton, BuildPreviewButton, BuildVapeButton} from "@/puff-smith/site/lab/build";
import {IQuickMenuProps, QuickMenu} from "@leight-core/leight";
import {useBuildsQueryInvalidate, useDeleteMutation} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {useTranslation} from "react-i18next";

export interface IBuildQuickMenu extends Partial<IQuickMenuProps> {
	build: BuildDto;
}

export const BuildQuickMenu: FC<IBuildQuickMenu> = ({build, ...props}) => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const buildsQueryInvalidate = useBuildsQueryInvalidate();
	return <QuickMenu {...props}>
		<Menu.Item>
			<BuildVapeButton build={build}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<BuildPreviewButton build={build}/>
		</Menu.Item>
		<Menu.Item>
			<BuildLinkButton build={build}/>
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
	</QuickMenu>;
}

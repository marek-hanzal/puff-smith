import {FC} from "react";
import {useTranslation} from "react-i18next";
import {useDeleteMutation, useVapesQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {Menu, message} from "antd";
import {VapeCloneButton, VapeCommentButton, VapeDeleteButton, VapeEditButton, VapeLinkButton, VapePreviewButton, VapeRateButton} from "@/puff-smith/site/lab/vape";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight/dist";
import {MenuOutlined} from "@ant-design/icons";
import {BuildPreviewButton} from "@/puff-smith/site/lab/build";
import {MixturePreviewButton} from "@/puff-smith/site/lab/mixture";

export interface IVapeQuickMenuProps extends Partial<IDrawerButtonProps> {
	vape: VapeDto;
}

export const VapeQuickMenu: FC<IVapeQuickMenuProps> = ({vape, ...props}) => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const vapesQueryInvalidate = useVapesQueryInvalidate();
	return <DrawerButton
		type={'text'}
		drawerProps={{
			title: t('lab.vape.context.menu', {data: vape}),
			bodyStyle: {padding: 0}
		}}
		width={350}
		icon={<MenuOutlined/>}
		{...props}
	>
		<Menu selectable={false}>
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
				<VapeDeleteButton
					vape={vape}
					onOk={setShow => {
						deleteMutation.mutate({
							id: vape.id,
						}, {
							onSuccess: () => {
								message.success(t('lab.vape.deleted.success'))
								vapesQueryInvalidate();
							},
						})
						setShow(false);
					}}
				/>
			</Menu.Item>
		</Menu>
	</DrawerButton>;
}

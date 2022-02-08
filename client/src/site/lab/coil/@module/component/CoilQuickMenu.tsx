import {FC} from "react";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {Menu, message} from "antd";
import {CoilCloneButton, CoilDeleteButton, CoilEditButton, CoilLinkButton, CoilPreviewButton} from "@/puff-smith/site/lab/coil";
import {useCoilsQueryInvalidate, useDeleteMutation} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {useTranslation} from "react-i18next";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight/dist";
import {MenuOutlined} from "@ant-design/icons";

export interface ICoilQuickMenuProps extends Partial<IDrawerButtonProps> {
	coil: CoilDto;
}

export const CoilQuickMenu: FC<ICoilQuickMenuProps> = ({coil, ...props}) => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const coilsQueryInvalidate = useCoilsQueryInvalidate();
	return <DrawerButton
		type={'text'}
		drawerProps={{
			title: t('lab.coil.context.menu', {data: coil}),
			bodyStyle: {padding: 0}
		}}
		width={350}
		icon={<MenuOutlined/>}
		{...props}
	>
		<Menu selectable={false}>
			<Menu.Item>
				<CoilLinkButton coil={coil}/>
			</Menu.Item>
			<Menu.Divider/>
			<Menu.Item>
				<CoilPreviewButton coil={coil}/>
			</Menu.Item>
			<Menu.Item>
				<CoilEditButton coil={coil}/>
			</Menu.Item>
			<Menu.Item>
				<CoilCloneButton coil={coil}/>
			</Menu.Item>
			<Menu.Divider/>
			<Menu.Item>
				<CoilDeleteButton
					coil={coil}
					onOk={setShow => {
						deleteMutation.mutate({
							id: coil.id,
						}, {
							onSuccess: () => {
								message.success(t('lab.coil.deleted.success'))
								coilsQueryInvalidate();
							},
						})
						setShow(false);
					}}
				/>
			</Menu.Item>
		</Menu>
	</DrawerButton>
}

import {FC} from "react";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {Menu, message} from "antd";
import {AtomizerDeleteButton, AtomizerEditButton, AtomizerLinkButton, AtomizerPreviewButton} from "@/puff-smith/site/lab/atomizer";
import {useAtomizersQueryInvalidate, useDeleteMutation} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {useTranslation} from "react-i18next";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight/dist";
import {MenuOutlined} from "@ant-design/icons";

export interface IAtomizerQuickMenuProps extends Partial<IDrawerButtonProps> {
	atomizer: AtomizerDto;
}

export const AtomizerQuickMenu: FC<IAtomizerQuickMenuProps> = ({atomizer, ...props}) => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const atomizersQueryInvalidate = useAtomizersQueryInvalidate();
	return <DrawerButton
		type={'text'}
		drawerProps={{title: t('lab.atomizer.context.menu', {data: atomizer})}}
		icon={<MenuOutlined/>}
		{...props}
	>
		<Menu selectable={false}>
			<Menu.Item>
				<AtomizerLinkButton atomizer={atomizer}/>
			</Menu.Item>
			<Menu.Divider/>
			<Menu.Item>
				<AtomizerPreviewButton atomizer={atomizer}/>
			</Menu.Item>
			<Menu.Item>
				<AtomizerEditButton atomizer={atomizer}/>
			</Menu.Item>
			<Menu.Divider/>
			<Menu.Item>
				<AtomizerDeleteButton
					atomizer={atomizer}
					onOk={setShow => {
						deleteMutation.mutate({
							id: atomizer.id,
						}, {
							onSuccess: () => {
								message.success(t('lab.atomizer.deleted.success'))
								atomizersQueryInvalidate();
							},
						})
						setShow(false);
					}}
				/>
			</Menu.Item>
		</Menu>
	</DrawerButton>
}

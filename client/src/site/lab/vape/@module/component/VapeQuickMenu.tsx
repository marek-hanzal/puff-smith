import {FC} from "react";
import {useTranslation} from "react-i18next";
import {useDeleteMutation, useVapesQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {Menu, message} from "antd";
import {VapeCloneButton, VapeCommentButton, VapeDeleteButton, VapeEditButton, VapeLinkButton, VapePreviewButton} from "@/puff-smith/site/lab/vape";
import {IQuickMenuProps, QuickMenu} from "@leight-core/leight/dist";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";

export interface IVapeQuickMenuProps extends Partial<IQuickMenuProps> {
	vape: VapeDto;
}

export const VapeQuickMenu: FC<IVapeQuickMenuProps> = ({vape, ...props}) => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const vapesQueryInvalidate = useVapesQueryInvalidate();
	return <QuickMenu {...props}>
		<Menu.Item>
			<VapeLinkButton vape={vape}/>
		</Menu.Item>
		<Menu.Divider/>
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
	</QuickMenu>;
}

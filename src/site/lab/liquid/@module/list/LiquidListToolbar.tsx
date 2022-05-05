import {useDeleteMutation} from "@/sdk/api/liquid/delete";
import {useLiquidsQueryInvalidate, useLiquidsSelectionContext} from "@/sdk/api/liquid/query";
import {ButtonBar, DeleteItemIcon, IButtonBarProps, ModalButton} from "@leight-core/client";
import {message} from "antd";
import {FC} from "react";
import {Trans, useTranslation} from "react-i18next";

interface ILiquidListToolbarProps extends Partial<IButtonBarProps> {
}

export const LiquidListToolbar: FC<ILiquidListToolbarProps> = props => {
	const {t} = useTranslation();
	const selectionContext = useLiquidsSelectionContext();
	const deleteMutation = useDeleteMutation();
	const liquidsQueryInvalidate = useLiquidsQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<ModalButton
			button={{
				disabled: selectionContext.isEmpty(),
				icon: <DeleteItemIcon/>,
				danger: true,
				children: "lab.liquid.delete.modal.button",
				size: "large",
				loading: deleteMutation.isLoading,
			}}
			okButtonProps={{
				danger: true,
				size: "large",
				loading: deleteMutation.isLoading,
				icon: <DeleteItemIcon/>,
			}}
			title={"lab.liquid.delete.modal.title"}
			confirmLoading={deleteMutation.isLoading}
			cancelButtonProps={{
				disabled: deleteMutation.isLoading,
			}}
			closable={!deleteMutation.isLoading}
			maskClosable={!deleteMutation.isLoading}
			onOk={setShow => {
				deleteMutation.mutate({ids: selectionContext.toSelection()}, {
					onSuccess: async () => {
						selectionContext.clear();
						message.success(t("lab.liquid.delete.success"));
						await liquidsQueryInvalidate();
					},
					onError: async () => {
						message.error(t("lab.liquid.delete.failure"));
					},
					onSettled: () => setShow(false),
				});
			}}
		>
			<Trans i18nKey={"lab.liquid.delete.modal.content"}/>
		</ModalButton>
	</ButtonBar>;
};

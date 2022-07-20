import {useAromaSelectionContext} from "@/sdk/api/aroma/query";
import {DeleteItemIcon, IModalButtonProps, ModalButton} from "@leight-core/client";
import {UseMutationResult} from "@tanstack/react-query";
import {message} from "antd";
import {FC} from "react";
import {Trans, useTranslation} from "react-i18next";

export interface IDeleteConfirmButtonProps extends Partial<IModalButtonProps> {
	translation: string;
	mutator: UseMutationResult<any, any, string[]>;
	invalidator?: () => Promise<any>;
}

export const DeleteConfirmButton: FC<IDeleteConfirmButtonProps> = ({translation, mutator, invalidator = async () => null, button, ...props}) => {
	const {t} = useTranslation();
	const selectionContext = useAromaSelectionContext();
	return <ModalButton
		button={{
			type: "link",
			disabled: selectionContext.isEmpty(),
			icon: <DeleteItemIcon/>,
			danger: true,
			children: "common.delete.modal.button",
			size: "large",
			loading: mutator.isLoading,
			...button,
		}}
		okButtonProps={{
			danger: true,
			size: "large",
			loading: mutator.isLoading,
			icon: <DeleteItemIcon/>,
		}}
		title={`${translation}.delete.modal.title`}
		confirmLoading={mutator.isLoading}
		cancelButtonProps={{
			disabled: mutator.isLoading,
			type: "link",
			size: "large",
		}}
		closable={!mutator.isLoading}
		maskClosable={!mutator.isLoading}
		onOk={setShow => {
			mutator.mutate(selectionContext.toSelection(), {
				onSuccess: async () => {
					selectionContext.clear();
					message.success(t(`${translation}.delete.success`));
					await invalidator();
				},
				onError: async () => {
					message.error(t(`${translation}.delete.failure`));
				},
				onSettled: () => setShow(false),
			});
		}}
		{...props}
	>
		<Trans i18nKey={`${translation}.delete.modal.content`}/>
	</ModalButton>;
};

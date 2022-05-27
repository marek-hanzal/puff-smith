import {useAromaSelectionContext} from "@/sdk/api/aroma/query";
import {DeleteItemIcon, ModalButton} from "@leight-core/client";
import {message} from "antd";
import {FC} from "react";
import {Trans, useTranslation} from "react-i18next";
import {UseMutationResult} from "react-query";

export interface IDeleteConfirmButtonProps {
	translation: string;
	mutator: UseMutationResult<any, any, string[]>;
	invalidator?: () => Promise<any>;
}

export const DeleteConfirmButton: FC<IDeleteConfirmButtonProps> = ({translation, mutator, invalidator = async () => null}) => {
	const {t} = useTranslation();
	const selectionContext = useAromaSelectionContext();
	return <ModalButton
		button={{
			disabled: selectionContext.isEmpty(),
			icon: <DeleteItemIcon/>,
			danger: true,
			children: "common.delete.modal.button",
			size: "large",
			loading: mutator.isLoading,
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
	>
		<Trans i18nKey={`${translation}.delete.modal.content`}/>
	</ModalButton>;
};

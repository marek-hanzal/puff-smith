import {
    IModalButtonProps,
    ModalButton
}                            from "@leight/antd";
import {DeleteIcon}          from "@leight/icon";
import {useSelectionContext} from "@leight/selection";
import {UseMutationResult}   from "@tanstack/react-query";
import {message}             from "antd";
import {FC}                  from "react";
import {
    Trans,
    useTranslation
}                            from "react-i18next";

export interface IDeleteConfirmButtonProps extends Partial<IModalButtonProps> {
    translation: string;
    mutator: UseMutationResult<any, any, string[]>;
    invalidator?: () => Promise<any>;
}

export const DeleteButton: FC<IDeleteConfirmButtonProps> = ({translation, mutator, invalidator = async () => null, button, ...props}) => {
    const {t}              = useTranslation();
    const selectionContext = useSelectionContext();
    return <ModalButton
        button={{
            type:     "link",
            disabled: selectionContext.isEmpty(),
            icon:     <DeleteIcon/>,
            danger:   true,
            children: "common.delete.modal.button",
            size:     "large",
            loading:  mutator.isLoading,
            ...button,
        }}
        okButtonProps={{
            danger:  true,
            size:    "large",
            loading: mutator.isLoading,
            icon:    <DeleteIcon/>,
        }}
        title={`${translation}.delete.modal.title`}
        confirmLoading={mutator.isLoading}
        cancelButtonProps={{
            disabled: mutator.isLoading,
            type:     "link",
            size:     "large",
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
                onError:   async () => {
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

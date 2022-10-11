import {useFileDeleteMutation}  from "@/sdk/api/file/delete";
import {useFileQueryInvalidate} from "@/sdk/api/file/query";
import {
	DeleteItemIcon,
	Translate,
	useSelectionContext
}                               from "@leight-core/client";
import {
	Button,
	message
}                               from "antd";
import {
	ComponentProps,
	FC
}                               from "react";
import {useTranslation}         from "react-i18next";

export interface IDeleteButtonProps extends Partial<ComponentProps<typeof Button>> {
}

export const DeleteButton: FC<IDeleteButtonProps> = props => {
	const {t}                 = useTranslation();
	const selectionContext    = useSelectionContext();
	const fileDeleteMutation  = useFileDeleteMutation();
	const fileQueryInvalidate = useFileQueryInvalidate();
	return <Button
		type={"link"}
		danger
		disabled={selectionContext.isEmpty()}
		icon={<DeleteItemIcon/>}
		loading={fileDeleteMutation.isLoading}
		onClick={() => fileDeleteMutation.mutate(selectionContext.toSelection(), {
			onSuccess: async () => {
				await fileQueryInvalidate();
				selectionContext.clear();
				message.success(t("root.file.delete.success"));
			},
			onError:   async () => {
				message.error(t("root.file.delete.error"));
			},
		})}
		{...props}
	>
		<span>
			<Translate namespace={"root.file"} text={"delete.button"}/>
		</span>
	</Button>;
};

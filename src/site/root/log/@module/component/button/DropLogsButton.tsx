import {DeleteItemIcon} from "@leight-core/leight";
import {Button, ButtonProps, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {useDropLogsMutation} from "@/sdk/edde/api/root/log/endpoint";

export interface IDropLogsButtonProps extends Partial<ButtonProps> {
}

export const DropLogsButton: FC<IDropLogsButtonProps> = props => {
	const {t} = useTranslation();
	const mutation = useDropLogsMutation();
	return <Button
		icon={<DeleteItemIcon/>}
		danger
		onClick={() => {
			mutation.mutate(undefined, {
				onSuccess: () => {
					message.success(t("root.logs.drop.success"));
				},
				onError: e => {
					console.log(e);
					message.error(t("root.logs.drop.error"));
				},
			});
		}}
		disabled={mutation.isLoading}
		{...props}
	>
		{t("root.logs.drop.label")}
	</Button>;
};

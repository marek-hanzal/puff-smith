import {DeleteItemIcon} from "@leight-core/leight";
import {Button, ButtonProps, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {useDropCacheMutation} from "@/sdk/edde/api/root/cache/endpoint";

export interface IDropCacheButtonProps extends Partial<ButtonProps> {
}

export const DropCacheButton: FC<IDropCacheButtonProps> = props => {
	const {t} = useTranslation();
	const mutation = useDropCacheMutation();
	return <Button
		size={"large"}
		icon={<DeleteItemIcon/>}
		danger
		onClick={() => {
			localStorage.clear();
			sessionStorage.clear();
			mutation.mutate(undefined, {
				onSuccess: () => {
					message.success(t("root.cache.drop.success"));
				},
				onError: e => {
					console.log(e);
					message.error(t("root.cache.drop.error"));
				},
			});
		}}
		disabled={mutation.isLoading}
		{...props}
	>
		{t("root.cache.drop.label")}
	</Button>
};

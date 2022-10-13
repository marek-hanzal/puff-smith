import {IAroma}                 from "@/puff-smith/service/aroma/interface";
import {useAromaDeleteMutation} from "@/sdk/api/aroma/delete";
import {
	BubbleMenu,
	DeleteConfirmDialog
}                               from "@leight-core/viv";
import {message}                from "antd";
import {Toast}                  from "antd-mobile";
import {FC}                     from "react";
import {useTranslation}         from "react-i18next";

export interface IAromaAromaBubbleProps {
	aroma: IAroma;
}

export const AromaAromaBubble: FC<IAromaAromaBubbleProps> = ({aroma}) => {
	const {t}                 = useTranslation();
	const aromaDeleteMutation = useAromaDeleteMutation();
	return <BubbleMenu
		translation={"lab.aroma"}
		actions={[
			{
				key:     "edit.button",
				bold:    true,
				onClick: ({navigate}) => navigate("/lab/aroma/[aromaId]/edit", {aromaId: aroma.id}),
			},
			{
				key:     "liquid.create",
				onClick: ({navigate}) => navigate("/lab/liquid/create", {aromaId: aroma.id}),
			},
			{
				key:     "delete.button",
				danger:  true,
				onClick: async ({navigate, setVisible}) => {
					await DeleteConfirmDialog({
						translation: {
							namespace: "shared.aroma",
						},
						onConfirm:   () => {
							Toast.show({
								icon:     "loading",
								duration: 0,
							});
							aromaDeleteMutation.mutate([aroma.id], {
								onSuccess: () => {
									setVisible(false);
									Toast.show({
										icon:     "success",
										duration: 500,
									});
									message.success(t("shared.aroma.delete.success"));
									navigate("/lab/aroma");
								},
								onError:   () => {
									setVisible(false);
									Toast.show({
										icon:     "fail",
										duration: 500,
									});
								},
							});
						},
					});
				},
			},
		]}
	/>;
};

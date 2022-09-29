import {ILiquid} from "@/puff-smith/service/liquid/interface";
import {useLiquidDeleteMutation} from "@/sdk/api/liquid/delete";
import {BubbleMenu, DeleteConfirmDialog} from "@leight-core/client";
import {message} from "antd";
import {Toast} from "antd-mobile";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ILiquidLiquidBubbleProps {
	liquid: ILiquid;
}

export const LiquidLiquidBubble: FC<ILiquidLiquidBubbleProps> = ({liquid}) => {
	const {t} = useTranslation();
	const liquidDeleteMutation = useLiquidDeleteMutation();
	return <BubbleMenu
		translation={"lab.liquid"}
		actions={[
			{
				key: "edit.button",
				bold: true,
				onClick: ({navigate}) => navigate("/lab/liquid/[liquidId]/edit", {liquidId: liquid.id}),
			},
			{
				key: "delete.button",
				danger: true,
				onClick: async ({navigate, setVisible}) => {
					await DeleteConfirmDialog({
						translation: {
							namespace: "shared.liquid",
						},
						onConfirm: () => {
							Toast.show({
								icon: "loading",
								duration: 0,
							});
							liquidDeleteMutation.mutate([liquid.id], {
								onSuccess: () => {
									setVisible(false);
									Toast.show({
										icon: "success",
										duration: 500,
									});
									message.success(t("shared.liquid.delete.success"));
									navigate("/lab/liquid");
								},
								onError: () => {
									setVisible(false);
									Toast.show({
										icon: "fail",
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

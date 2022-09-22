import {useTranslationDeleteMutation} from "@/sdk/api/translation/delete";
import {useTranslationQueryInvalidate} from "@/sdk/api/translation/query";
import {ITranslation} from "@leight-core/api";
import {DeleteItemIcon, EditIcon, useNavigate, useOptionalCursorContext, useOptionalFilterContext, useSourceContext} from "@leight-core/client";
import {message} from "antd";
import {SwipeAction, Toast} from "antd-mobile";
import {ComponentProps, FC} from "react";
import {useTranslation} from "react-i18next";

export interface ITranslationListSwipeProps extends Pick<ComponentProps<typeof SwipeAction>, "children"> {
	translation: ITranslation;
}

export const TranslationListSwipe: FC<ITranslationListSwipeProps> = ({translation, ...props}) => {
	const {t} = useTranslation();
	const navigate = useNavigate();
	const translationDeleteMutation = useTranslationDeleteMutation();
	const translationQueryInvalidate = useTranslationQueryInvalidate();
	const sourceContext = useSourceContext();
	const filterContext = useOptionalFilterContext();
	const cursorContext = useOptionalCursorContext();
	return <SwipeAction
		key={"translation-" + translation.id}
		leftActions={[
			{
				key: "delete",
				text: <DeleteItemIcon/>,
				color: "danger",
				onClick: () => {
					Toast.show({
						icon: "loading",
						maskClickable: false,
						duration: 0,
					});
					translationDeleteMutation.mutate([translation.id], {
						onSuccess: async () => {
							message.success(t("shared.translation.delete.success"));
							Toast.show({
								icon: "success",
								maskClickable: false,
								duration: 500,
							});
							await translationQueryInvalidate();
							setTimeout(() => {
								sourceContext.reset();
								filterContext?.setFilter({});
								cursorContext?.setPage(0);
							}, 0);
						},
						onError: () => {
							Toast.show({
								icon: "fail",
								maskClickable: false,
								duration: 500,
							});
						}
					});
				},
			},
		]}
		rightActions={[
			{
				key: "edit",
				text: <EditIcon/>,
				color: "primary",
				onClick: () => navigate("/root/translation/[translationId]/edit", {translationId: translation.id}),
			},
		]}
		{...props}
	/>;
};

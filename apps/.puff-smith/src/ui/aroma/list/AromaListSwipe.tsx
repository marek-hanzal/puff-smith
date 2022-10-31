import {LiquidIcon}              from "@/puff-smith/component/icon/LiquidIcon";
import {IAroma}                  from "@/puff-smith/service/aroma/interface";
import {useAromaDeleteMutation}  from "@/sdk/api/aroma/delete";
import {useAromaQueryInvalidate} from "@/sdk/api/aroma/query";
import {
    DeleteItemIcon,
    EditIcon,
    useNavigate,
    useOptionalCursorContext,
    useOptionalFilterContext,
    useSourceContext
}                                from "@leight-core/viv";
import {message}                 from "antd";
import {
    SwipeAction,
    Toast
}                                from "antd-mobile";
import {
    ComponentProps,
    FC
}                                from "react";
import {useTranslation}          from "react-i18next";

export interface IAromaListSwipeProps extends Pick<ComponentProps<typeof SwipeAction>, "children"> {
	aroma: IAroma;
}

export const AromaListSwipe: FC<IAromaListSwipeProps> = ({aroma, ...props}) => {
	const {t}                  = useTranslation();
	const navigate             = useNavigate();
	const aromaDeleteMutation  = useAromaDeleteMutation();
	const aromaQueryInvalidate = useAromaQueryInvalidate();
	const sourceContext        = useSourceContext();
	const filterContext        = useOptionalFilterContext();
	const cursorContext        = useOptionalCursorContext();
	return <SwipeAction
		key={"aroma-" + aroma.id}
		leftActions={[
			{
				key:     "delete",
				text:    <DeleteItemIcon/>,
				color:   "danger",
				onClick: () => {
					Toast.show({
						icon:          "loading",
						maskClickable: false,
						duration:      0,
					});
					aromaDeleteMutation.mutate([aroma.id], {
						onSuccess: async () => {
							message.success(t("shared.aroma.delete.success"));
							Toast.show({
								icon:          "success",
								maskClickable: false,
								duration:      500,
							});
							await aromaQueryInvalidate();
							setTimeout(() => {
								sourceContext.reset();
								filterContext?.setFilter({});
								cursorContext?.setPage(0);
							}, 0);
						},
						onError:   () => {
							Toast.show({
								icon:          "fail",
								maskClickable: false,
								duration:      500,
							});
						}
					});
				},
			},
		]}
		rightActions={[
			{
				key:     "edit",
				text:    <EditIcon/>,
				color:   "primary",
				onClick: () => navigate("/market/aroma/[aromaId]/edit", {aromaId: aroma.id}),
			},
			{
				key:     "liquid.create",
				text:    <LiquidIcon/>,
				color:   "warning",
				onClick: () => navigate("/lab/liquid/create", {aromaId: aroma.id}),
			},
		]}
		{...props}
	/>;
};

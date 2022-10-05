import {ILiquid}                  from "@/puff-smith/service/liquid/interface";
import {useLiquidDeleteMutation}  from "@/sdk/api/liquid/delete";
import {useLiquidQueryInvalidate} from "@/sdk/api/liquid/query";
import {
	DeleteItemIcon,
	EditIcon,
	useNavigate,
	useOptionalCursorContext,
	useOptionalFilterContext,
	useSourceContext
}                                 from "@leight-core/client";
import {message}                  from "antd";
import {
	SwipeAction,
	Toast
}                                 from "antd-mobile";
import {
	ComponentProps,
	FC
}                                 from "react";
import {useTranslation}           from "react-i18next";

export interface ILiquidListSwipeProps extends Pick<ComponentProps<typeof SwipeAction>, "children"> {
	liquid: ILiquid;
}

export const LiquidListSwipe: FC<ILiquidListSwipeProps> = ({liquid, ...props}) => {
	const {t}                   = useTranslation();
	const navigate              = useNavigate();
	const liquidDeleteMutation  = useLiquidDeleteMutation();
	const liquidQueryInvalidate = useLiquidQueryInvalidate();
	const sourceContext         = useSourceContext();
	const filterContext         = useOptionalFilterContext();
	const cursorContext         = useOptionalCursorContext();
	return <SwipeAction
		key={"liquid-" + liquid.id}
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
					liquidDeleteMutation.mutate([liquid.id], {
						onSuccess: async () => {
							message.success(t("shared.liquid.delete.success"));
							Toast.show({
								icon:          "success",
								maskClickable: false,
								duration:      500,
							});
							await liquidQueryInvalidate();
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
				onClick: () => navigate("/lab/liquid/[liquidId]/edit", {liquidId: liquid.id}),
			},
		]}
		{...props}
	/>;
};

import {IRecipe}                  from "@/puff-smith/service/recipe/interface";
import {useRecipeDeleteMutation}  from "@/sdk/api/recipe/delete";
import {useRecipeQueryInvalidate} from "@/sdk/api/recipe/query";
import {
    DeleteItemIcon,
    EditIcon,
    useNavigate,
    useOptionalCursorContext,
    useOptionalFilterContext,
    useSourceContext
}                                 from "@leight-core/viv";
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

export interface IRecipeListSwipeProps extends Pick<ComponentProps<typeof SwipeAction>, "children"> {
	recipe: IRecipe;
}

export const RecipeListSwipe: FC<IRecipeListSwipeProps> = ({recipe, ...props}) => {
	const {t}                   = useTranslation();
	const navigate              = useNavigate();
	const recipeDeleteMutation  = useRecipeDeleteMutation();
	const recipeQueryInvalidate = useRecipeQueryInvalidate();
	const sourceContext         = useSourceContext();
	const filterContext         = useOptionalFilterContext();
	const cursorContext         = useOptionalCursorContext();
	return <SwipeAction
		key={"recipe-" + recipe.id}
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
					recipeDeleteMutation.mutate([recipe.id], {
						onSuccess: async () => {
							message.success(t("shared.recipe.delete.success"));
							Toast.show({
								icon:          "success",
								maskClickable: false,
								duration:      500,
							});
							await recipeQueryInvalidate();
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
				onClick: () => navigate("/lab/recipe/[recipeId]/edit", {recipeId: recipe.id}),
			},
		]}
		{...props}
	/>;
};

import {RecipeIcon}    from "@/puff-smith/component/icon/RecipeIcon";
import {CloseOutlined} from "@ant-design/icons";
import {
    ButtonLink,
    Translate,
    useCursorContext,
    useFilterContext,
    useSourceContext
}                      from "@leight-core/viv";
import {
    Button,
    Divider
}                      from "antd";
import {FC}            from "react";

export interface IRecipeListNothingProps {
}

export const RecipeListNothing: FC<IRecipeListNothingProps> = () => {
	const sourceContext = useSourceContext();
	const cursorContext = useCursorContext();
	const filterContext = useFilterContext();
	return <Divider>
		{!cursorContext?.total ? <ButtonLink
			type={"primary"}
			href={"/lab/recipe/create"}
			icon={<RecipeIcon/>}
			label={"shared.recipe.create.button"}
		/> : null}
		{cursorContext?.total ? <Button
			type={"link"}
			icon={<CloseOutlined/>}
			onClick={() => {
				sourceContext.reset();
				filterContext.setFilter({});
			}}
		>
			<span>
				<Translate namespace={"common.filter"} text={"clear.button"}/>
			</span>
		</Button> : null}
	</Divider>;
};

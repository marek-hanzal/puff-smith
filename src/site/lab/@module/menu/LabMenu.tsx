import {BuildIcon}  from "@/puff-smith/component/icon/BuildIcon";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {RecipeIcon} from "@/puff-smith/component/icon/RecipeIcon";
import {MobileMenu} from "@leight-core/client";
import {FC}         from "react";

export interface ILabMenuProps {
}

export const LabMenu: FC<ILabMenuProps> = () => {
	return <>
		<MobileMenu
			items={[
				{
					label: "lab.build.menu",
					href:  "/lab/build",
					icon:  <BuildIcon/>,
				},
				{
					label: "lab.recipe.menu",
					href:  "/lab/recipe",
					icon:  <RecipeIcon/>,
				},
				{
					label: "lab.liquid.menu",
					href:  "/lab/liquid",
					icon:  <LiquidIcon/>,
				},
			]}
		/>
	</>;
};

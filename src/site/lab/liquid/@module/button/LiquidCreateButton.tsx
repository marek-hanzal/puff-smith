import {LiquidIcon} from "@/puff-smith";
import {LiquidCreateView} from "@/puff-smith/site/lab/liquid";
import {DrawerButton, FilterProvider, IDrawerButtonProps} from "@leight-core/client";
import {FC} from "react";

export interface ILiquidCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const LiquidCreateButton: FC<ILiquidCreateButtonProps> = props => {
	return <DrawerButton
		size={"large"}
		type={"primary"}
		ghost
		icon={<LiquidIcon/>}
		title={"lab.liquid.create.title"}
		width={875}
		{...props}
	>
		<FilterProvider name={"LiquidCreateButton"}>
			<LiquidCreateView/>
		</FilterProvider>
	</DrawerButton>;
};

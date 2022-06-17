import {LiquidCreateForm} from "@/puff-smith/site/lab/liquid/@module/form/LiquidCreateForm";
import {DrawerButton, EditIcon, IDrawerButtonProps} from "@leight-core/client";
import {FC} from "react";

export interface ILiquidCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const LiquidCreateButton: FC<ILiquidCreateButtonProps> = props => {
	return <DrawerButton
		type={"primary"}
		size={"large"}
		label={"lab.liquid.create.button"}
		title={"lab.liquid.create.title"}
		icon={<EditIcon/>}
		{...props}
	>
		<LiquidCreateForm/>
	</DrawerButton>;
};

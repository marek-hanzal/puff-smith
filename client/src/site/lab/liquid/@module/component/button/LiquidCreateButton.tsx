import {CreateIcon, DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {FC} from "react";
import {CreateLiquidForm} from "@/puff-smith/site/lab/liquid/@module/form/CreateLiquidForm";

export interface ILiquidCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const LiquidCreateButton: FC<ILiquidCreateButtonProps> = props => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<CreateIcon/>}
		title={'lab.liquid.button.create'}
		{...props}
	>
		<CreateLiquidForm/>
	</DrawerButton>
}

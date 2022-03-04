import {DrawerButton, EditIcon, IDrawerButtonProps} from "@leight-core/common";
import {FC} from "react";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {PatchLiquidForm} from "../../form/PatchLiquidForm";

export interface ILiquidEditButtonProps extends Partial<IDrawerButtonProps> {
	liquid: LiquidDto;
}

export const LiquidEditButton: FC<ILiquidEditButtonProps> = ({liquid, ...props}) => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<EditIcon/>}
		title={'lab.liquid.button.edit'}
		{...props}
	>
		<PatchLiquidForm liquid={liquid}/>
	</DrawerButton>
}
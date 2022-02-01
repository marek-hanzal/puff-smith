import {ButtonLink, EditIcon, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";

export interface ILiquidEditButtonProps extends Partial<IButtonLinkProps> {
	liquid: LiquidDto
}

export const LiquidEditButton: FC<ILiquidEditButtonProps> = ({liquid, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/liquid/[liquidId]/edit'}
		query={{liquidId: liquid.id}}
		icon={<EditIcon/>}
		title={'lab.liquid.button.edit'}
		{...props}
	/>;
}

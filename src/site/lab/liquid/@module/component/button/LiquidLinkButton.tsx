import {ButtonLink, IButtonLinkProps} from "@leight-core/common";
import {FC} from "react";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {LiquidIcon} from "@/puff-smith";

export interface ILiquidLinkButtonProps extends Partial<IButtonLinkProps> {
	liquid: LiquidDto
}

export const LiquidLinkButton: FC<ILiquidLinkButtonProps> = ({liquid, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/liquid/[liquidId]'}
		query={{liquidId: liquid.id}}
		icon={<LiquidIcon/>}
		title={'lab.liquid.button.index'}
		{...props}
	/>;
}

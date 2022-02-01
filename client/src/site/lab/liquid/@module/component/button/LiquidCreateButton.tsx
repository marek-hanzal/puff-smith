import {ButtonLink, CreateIcon, IButtonLinkProps} from "@leight-core/leight";
import {FC} from "react";

export interface ILiquidCreateButtonProps extends Partial<IButtonLinkProps> {
}

export const LiquidCreateButton: FC<ILiquidCreateButtonProps> = props => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/liquid/create'}
		icon={<CreateIcon/>}
		title={'lab.liquid.button.create'}
		{...props}
	/>;
}

import {ButtonLink, IButtonLinkProps, ListIcon} from "@leight-core/leight";
import {FC} from "react";

export interface ILiquidListButtonProps extends Partial<IButtonLinkProps> {
}

export const LiquidListButton: FC<ILiquidListButtonProps> = props => {
	return <ButtonLink
		type={'link'}
		size={'large'}
		href={'/lab/liquid/list'}
		icon={<ListIcon/>}
		title={'lab.liquid.button.list'}
		{...props}
	/>
}

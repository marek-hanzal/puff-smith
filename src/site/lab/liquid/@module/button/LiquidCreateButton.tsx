import {LiquidIcon} from "@/puff-smith";
import {ButtonLink, IButtonLinkProps} from "@leight-core/client";
import {FC} from "react";

export interface ILiquidCreateButtonProps extends Partial<IButtonLinkProps> {
}

export const LiquidCreateButton: FC<ILiquidCreateButtonProps> = props => {
	return <ButtonLink
		type={"primary"}
		icon={<LiquidIcon/>}
		size={"large"}
		href={"/lab/liquid/create"}
		title={"lab.liquid.create.button"}
		{...props}
	/>;
};

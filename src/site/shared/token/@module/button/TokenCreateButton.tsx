import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {TokenCreateForm} from "@/puff-smith/site/shared/token/@module/form/TokenCreateForm";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/client";
import {FC} from "react";

export interface ITokenCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const TokenCreateButton: FC<ITokenCreateButtonProps> = props => {
	return <DrawerButton
		size={"large"}
		type={"primary"}
		title={"market.token.create.title"}
		label={"market.token.create.button"}
		icon={<LiquidIcon/>}
		{...props}
	>
		<TokenCreateForm/>
	</DrawerButton>;
};

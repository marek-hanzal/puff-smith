import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {AromaCreateForm} from "@/puff-smith/site/shared/aroma/@module/form/AromaCreateForm";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/client";
import {FC} from "react";

export interface IAromaCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const AromaCreateButton: FC<IAromaCreateButtonProps> = props => {
	return <DrawerButton
		size={"large"}
		type={"primary"}
		title={"market.aroma.create.title"}
		label={"market.aroma.create.button"}
		icon={<LiquidIcon/>}
		{...props}
	>
		<AromaCreateForm/>
	</DrawerButton>;
};

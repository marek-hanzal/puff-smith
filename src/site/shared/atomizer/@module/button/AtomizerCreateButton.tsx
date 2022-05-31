import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {AtomizerCreateForm} from "@/puff-smith/site/shared/atomizer/@module/form/AtomizerCreateForm";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/client";
import {FC} from "react";

export interface IAtomizerCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const AtomizerCreateButton: FC<IAtomizerCreateButtonProps> = props => {
	return <DrawerButton
		size={"large"}
		type={"primary"}
		title={"market.atomizer.create.title"}
		label={"market.atomizer.create.button"}
		icon={<AtomizerIcon/>}
		{...props}
	>
		<AtomizerCreateForm/>
	</DrawerButton>;
};

import {CreateIcon} from "@leight-core/leight";
import {FC} from "react";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight/dist";
import {CreateAtomizerForm} from "@/puff-smith/site/lab/atomizer";

export interface IAtomizerCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const AtomizerCreateButton: FC<IAtomizerCreateButtonProps> = props => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<CreateIcon/>}
		title={'lab.atomizer.button.create'}
		{...props}
	>
		<CreateAtomizerForm/>
	</DrawerButton>
}

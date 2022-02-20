import {CreateIcon, DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {FC} from "react";
import {CreateAtomizerForm} from "@/puff-smith/site/lab/atomizer/@module/form/CreateAtomizerForm";

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

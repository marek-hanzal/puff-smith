import {CreateIcon, DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {FC} from "react";
import {CreateModForm} from "@/puff-smith/site/lab/mod";

export interface IModCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const ModCreateButton: FC<IModCreateButtonProps> = props => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<CreateIcon/>}
		title={'lab.mod.button.create'}
		{...props}
	>
		<CreateModForm/>
	</DrawerButton>
}

import {CreateIcon, DrawerButton, IDrawerButtonProps} from "@leight-core/common";
import {FC} from "react";
import {CreateModForm} from "../../form/CreateModForm";

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

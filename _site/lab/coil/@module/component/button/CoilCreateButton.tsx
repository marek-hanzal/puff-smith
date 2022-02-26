import {CreateIcon, DrawerButton, IDrawerButtonProps} from "@leight-core/common";
import {FC} from "react";
import {CreateCoilForm} from "../../form/CreateCoilForm";

export interface ICoilCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const CoilCreateButton: FC<ICoilCreateButtonProps> = props => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<CreateIcon/>}
		title={'lab.coil.button.create'}
		{...props}
	>
		<CreateCoilForm/>
	</DrawerButton>
}

import {CreateIcon} from "@leight-core/leight";
import {FC} from "react";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight/dist";
import {CreateCoilForm} from "@/puff-smith/site/lab/coil";

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

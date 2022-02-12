import {DrawerButton, EditIcon, IDrawerButtonProps} from "@leight-core/leight";
import {FC} from "react";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {PatchCoilForm} from "@/puff-smith/site/lab/coil/@module/form/PatchCoilForm";

export interface ICoilEditButtonProps extends Partial<IDrawerButtonProps> {
	coil: CoilDto
}

export const CoilEditButton: FC<ICoilEditButtonProps> = ({coil, ...props}) => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<EditIcon/>}
		title={'lab.coil.button.edit'}
		{...props}
	>
		<PatchCoilForm coil={coil}/>
	</DrawerButton>
}

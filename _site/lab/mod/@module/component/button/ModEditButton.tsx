import {DrawerButton, EditIcon, IDrawerButtonProps} from "@leight-core/common";
import {FC} from "react";
import {ModDto} from "@/sdk/puff-smith/mod/dto";
import {PatchModForm} from "../../form/PatchModForm";

export interface IModEditButtonProps extends Partial<IDrawerButtonProps> {
	mod: ModDto;
}

export const ModEditButton: FC<IModEditButtonProps> = ({mod, ...props}) => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<EditIcon/>}
		title={'lab.mod.button.edit'}
		{...props}
	>
		<PatchModForm mod={mod}/>
	</DrawerButton>
}

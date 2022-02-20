import {DrawerButton, EditIcon, IDrawerButtonProps} from "@leight-core/leight";
import {FC} from "react";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {PatchVapeForm} from "@/puff-smith/site/lab/vape/@module/form/PatchVapeForm";

export interface IVapeEditButtonProps extends Partial<IDrawerButtonProps> {
	vape: VapeDto;
}

export const VapeEditButton: FC<IVapeEditButtonProps> = ({vape, ...props}) => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<EditIcon/>}
		title={'lab.vape.button.edit'}
		{...props}
	>
		<PatchVapeForm vape={vape}/>
	</DrawerButton>
}

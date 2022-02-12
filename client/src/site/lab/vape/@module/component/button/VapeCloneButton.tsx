import {FC} from "react";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {CloneIcon} from "@/puff-smith";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {CreateVapeForm} from "@/puff-smith/site/lab/vape/@module/form/CreateVapeForm";

export interface IVapeCloneButtonProps extends Partial<IDrawerButtonProps> {
	vape: VapeDto
}

export const VapeCloneButton: FC<IVapeCloneButtonProps> = ({vape, ...props}) => {
	return <DrawerButton
		type={'link'}
		size={'large'}
		icon={<CloneIcon/>}
		title={'lab.vape.button.clone'}
		{...props}
	>
		<CreateVapeForm vape={vape}/>
	</DrawerButton>
}

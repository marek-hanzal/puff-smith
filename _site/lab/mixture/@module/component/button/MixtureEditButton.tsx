import {DrawerButton, EditIcon, IDrawerButtonProps} from "@leight-core/common";
import {FC} from "react";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {PatchMixtureForm} from "../../form/PatchMixtureForm";

export interface IMixtureEditButtonProps extends Partial<IDrawerButtonProps> {
	mixture: MixtureDto
}

export const MixtureEditButton: FC<IMixtureEditButtonProps> = ({mixture, ...props}) => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<EditIcon/>}
		title={'lab.mixture.button.edit'}
		{...props}
	>
		<PatchMixtureForm mixture={mixture}/>
	</DrawerButton>
}

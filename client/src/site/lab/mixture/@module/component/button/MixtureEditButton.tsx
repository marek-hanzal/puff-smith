import {DrawerButton, EditIcon, IDrawerButtonProps} from "@leight-core/leight";
import {FC} from "react";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {PatchMixtureForm} from "@/puff-smith/site/lab/mixture";

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

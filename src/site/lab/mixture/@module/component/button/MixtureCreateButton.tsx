import {CreateIcon, DrawerButton, IDrawerButtonProps} from "@leight-core/common";
import {FC} from "react";
import {CreateMixtureForm} from "@/puff-smith/site/lab/mixture/@module/form/CreateMixtureForm";

export interface IMixtureCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const MixtureCreateButton: FC<IMixtureCreateButtonProps> = props => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<CreateIcon/>}
		title={'lab.mixture.button.create'}
		{...props}
	>
		<CreateMixtureForm/>
	</DrawerButton>
}

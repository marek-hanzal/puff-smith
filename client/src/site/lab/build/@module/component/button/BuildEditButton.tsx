import {DrawerButton, EditIcon, IDrawerButtonProps} from "@leight-core/leight";
import {FC} from "react";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {PatchBuildForm} from "@/puff-smith/site/lab/build/@module/form/PatchBuildForm";

export interface IBuildEditButtonProps extends Partial<IDrawerButtonProps> {
	build: BuildDto;
}

export const BuildEditButton: FC<IBuildEditButtonProps> = ({build, ...props}) => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<EditIcon/>}
		title={'lab.build.button.edit'}
		{...props}
	>
		<PatchBuildForm build={build}/>
	</DrawerButton>
}

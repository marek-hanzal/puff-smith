import {DrawerButton, EditIcon, IDrawerButtonProps} from "@leight-core/leight";
import {FC} from "react";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {PatchAtomizerForm} from "@/puff-smith/site/lab/atomizer";

export interface IAtomizerEditButtonProps extends Partial<IDrawerButtonProps> {
	atomizer: AtomizerDto;
}

export const AtomizerEditButton: FC<IAtomizerEditButtonProps> = ({atomizer, ...props}) => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<EditIcon/>}
		title={'lab.atomizer.button.edit'}
		{...props}
	>
		<PatchAtomizerForm atomizer={atomizer}/>
	</DrawerButton>
}

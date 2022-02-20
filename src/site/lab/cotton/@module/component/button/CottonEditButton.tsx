import {DrawerButton, EditIcon, IDrawerButtonProps} from "@leight-core/leight";
import {FC} from "react";
import {CottonDto} from "@/sdk/puff-smith/cotton/dto";
import {PatchCottonForm} from "@/puff-smith/site/lab/cotton/@module/form/PatchCottonForm";

export interface ICottonEditButtonProps extends Partial<IDrawerButtonProps> {
	cotton: CottonDto;
}

export const CottonEditButton: FC<ICottonEditButtonProps> = ({cotton, ...props}) => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<EditIcon/>}
		title={'lab.cotton.button.edit'}
		{...props}
	>
		<PatchCottonForm cotton={cotton}/>
	</DrawerButton>
}

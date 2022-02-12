import {CreateIcon, DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {FC} from "react";
import {CreateCottonForm} from "@/puff-smith/site/lab/cotton";

export interface ICottonCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const CottonCreateButton: FC<ICottonCreateButtonProps> = props => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<CreateIcon/>}
		title={'lab.cotton.button.create'}
		{...props}
	>
		<CreateCottonForm/>
	</DrawerButton>
}

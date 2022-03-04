import {CreateIcon, DrawerButton, IDrawerButtonProps} from "@leight-core/common";
import {FC} from "react";
import {CreateCottonForm} from "../../form/CreateCottonForm";

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
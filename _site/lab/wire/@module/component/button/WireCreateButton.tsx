import {CreateIcon, DrawerButton, IDrawerButtonProps} from "@leight-core/common";
import {FC} from "react";
import {CreateWireForm} from "../../form/CreateWireForm";

export interface IWireCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const WireCreateButton: FC<IWireCreateButtonProps> = props => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<CreateIcon/>}
		title={'lab.wire.button.create'}
		{...props}
	>
		<CreateWireForm/>
	</DrawerButton>
}

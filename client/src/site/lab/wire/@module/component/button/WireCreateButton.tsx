import {CreateIcon, DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {FC} from "react";
import {CreateWireForm} from "@/puff-smith/site/lab/wire/@module/form/CreateWireForm";

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

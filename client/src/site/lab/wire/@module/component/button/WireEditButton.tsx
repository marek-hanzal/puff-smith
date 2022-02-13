import {DrawerButton, EditIcon, IDrawerButtonProps} from "@leight-core/leight";
import {FC} from "react";
import {WireDto} from "@/sdk/puff-smith/wire/dto";
import {PatchWireForm} from "@/puff-smith/site/lab/wire/@module/form/PatchWireForm";

export interface IWireEditButtonProps extends Partial<IDrawerButtonProps> {
	wire: WireDto;
}

export const WireEditButton: FC<IWireEditButtonProps> = ({wire, ...props}) => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<EditIcon/>}
		title={'lab.wire.button.edit'}
		{...props}
	>
		<PatchWireForm wire={wire}/>
	</DrawerButton>
}

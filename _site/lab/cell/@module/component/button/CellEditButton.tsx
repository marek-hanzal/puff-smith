import {DrawerButton, EditIcon, IDrawerButtonProps} from "@leight-core/common";
import {FC} from "react";
import {CellDto} from "@/sdk/puff-smith/voucher/dto";
import {PatchCellForm} from "../../form/PatchCellForm";

export interface ICellEditButtonProps extends Partial<IDrawerButtonProps> {
	voucher: CellDto;
}

export const CellEditButton: FC<ICellEditButtonProps> = ({voucher, ...props}) => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<EditIcon/>}
		title={'lab.voucher.button.edit'}
		{...props}
	>
		<PatchCellForm voucher={voucher}/>
	</DrawerButton>
}

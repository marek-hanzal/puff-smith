import {CreateIcon, DrawerButton, IDrawerButtonProps} from "@leight-core/common";
import {FC} from "react";
import {CreateCellForm} from "@/puff-smith/site/lab/cell/@module/form/CreateCellForm";

export interface ICellCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const CellCreateButton: FC<ICellCreateButtonProps> = props => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<CreateIcon/>}
		title={'lab.cell.button.create'}
		{...props}
	>
		<CreateCellForm/>
	</DrawerButton>
}

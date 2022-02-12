import {CreateIcon, DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {FC} from "react";
import {CreateCellForm} from "@/puff-smith/site/lab/cell";

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

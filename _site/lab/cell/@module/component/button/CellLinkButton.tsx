import {ButtonLink, IButtonLinkProps} from "@leight-core/common";
import {FC} from "react";
import {CellDto} from "@/sdk/puff-smith/cell/dto";
import {CellIcon} from "@/puff-smith";

export interface ICellLinkButtonProps extends Partial<IButtonLinkProps> {
	cell: CellDto;
}

export const CellLinkButton: FC<ICellLinkButtonProps> = ({cell, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/cell/[cellId]'}
		query={{cellId: cell.id}}
		icon={<CellIcon/>}
		title={'lab.cell.button.index'}
		{...props}
	/>;
}

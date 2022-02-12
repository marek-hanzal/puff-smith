import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {CreateCellForm} from "@/puff-smith/site/lab/cell";
import {useOptionalFormItemContext} from "@leight-core/leight";

export interface ICellTooltipProps extends Partial<IFormTooltipProps> {
}

export const CellTooltip: FC<ICellTooltipProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <FormTooltip
		label={'lab.cell'}
		{...props}
	>
		<CreateCellForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</FormTooltip>
}

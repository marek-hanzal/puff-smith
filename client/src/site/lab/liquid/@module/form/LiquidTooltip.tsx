import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {CreateLiquidForm} from "@/puff-smith/site/lab/liquid";
import {useOptionalFormItemContext} from "@leight-core/leight";

export interface ILiquidTooltipProps extends Partial<IFormTooltipProps> {
}

export const LiquidTooltip: FC<ILiquidTooltipProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <FormTooltip
		label={'lab.liquid'}
		{...props}
	>
		<CreateLiquidForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</FormTooltip>
}

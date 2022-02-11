import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {CreateBoosterForm} from "@/puff-smith/site/lab/booster";
import {useOptionalFormItemContext} from "@leight-core/leight/dist";

export interface IBoosterTooltipProps extends Partial<IFormTooltipProps> {
}

export const BoosterTooltip: FC<IBoosterTooltipProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <FormTooltip
		label={'lab.booster'}
		{...props}
	>
		<CreateBoosterForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</FormTooltip>
}

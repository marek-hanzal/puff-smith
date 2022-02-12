import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {useOptionalFormItemContext} from "@leight-core/leight";
import {CreateBoosterForm} from "@/puff-smith/site/lab/booster/@module/form/CreateBoosterForm";

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

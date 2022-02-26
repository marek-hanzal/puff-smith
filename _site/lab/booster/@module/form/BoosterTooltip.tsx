import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {useOptionalFormItemContext} from "@leight-core/common";
import {CreateBoosterForm} from "./CreateBoosterForm";

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

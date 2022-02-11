import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {CreateModForm} from "@/puff-smith/site/lab/mod";
import {useOptionalFormItemContext} from "@leight-core/leight";

export interface IModTooltipProps extends Partial<IFormTooltipProps> {
}

export const ModTooltip: FC<IModTooltipProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <FormTooltip
		label={'lab.mod'}
		{...props}
	>
		<CreateModForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</FormTooltip>
}

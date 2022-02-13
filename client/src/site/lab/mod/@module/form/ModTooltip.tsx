import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {useOptionalFormItemContext} from "@leight-core/leight";
import {CreateModForm} from "@/puff-smith/site/lab/mod/@module/form/CreateModForm";

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

import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {CreateDriptipForm} from "@/puff-smith/site/lab/driptip";
import {useOptionalFormItemContext} from "@leight-core/leight";

export interface IDriptipTooltipProps extends Partial<IFormTooltipProps> {
}

export const DriptipTooltip: FC<IDriptipTooltipProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <FormTooltip
		label={'lab.driptip'}
		{...props}
	>
		<CreateDriptipForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</FormTooltip>
}

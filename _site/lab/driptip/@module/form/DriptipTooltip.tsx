import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {useOptionalFormItemContext} from "@leight-core/common";
import {CreateDriptipForm} from "./CreateDriptipForm";

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
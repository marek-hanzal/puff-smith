import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {useOptionalFormItemContext} from "@leight-core/common";
import {CreateBaseForm} from "./CreateBaseForm";

export interface IBaseTooltipProps extends Partial<IFormTooltipProps> {
}

export const BaseTooltip: FC<IBaseTooltipProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <FormTooltip
		label={'lab.base'}
		{...props}
	>
		<CreateBaseForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</FormTooltip>
}

import {FC} from "react";
import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {CreateWireForm} from "@/puff-smith/site/lab/wire";
import {useOptionalFormItemContext} from "@leight-core/leight/dist";

export interface IWireTooltipProps extends Partial<IFormTooltipProps> {
}

export const WireTooltip: FC<IWireTooltipProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <FormTooltip
		label={'lab.wire'}
		{...props}
	>
		<CreateWireForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</FormTooltip>
}

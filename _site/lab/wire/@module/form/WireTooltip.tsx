import {FC} from "react";
import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {useOptionalFormItemContext} from "@leight-core/common";
import {CreateWireForm} from "./CreateWireForm";

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

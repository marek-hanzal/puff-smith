import {FC} from "react";
import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {useOptionalFormItemContext} from "@leight-core/common";
import {CreateVendorForm} from "@/puff-smith/site/lab/vendor/@module/form/CreateVendorForm";

export interface IVendorTooltipProps extends Partial<IFormTooltipProps> {
}

export const VendorTooltip: FC<IVendorTooltipProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <FormTooltip
		label={'lab.vendor'}
		{...props}
	>
		<CreateVendorForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</FormTooltip>
}

import {FC} from "react";
import {FormTooltip, IFormTooltipProps, VendorIcon} from "@/puff-smith";

export interface IVendorTooltipProps extends Partial<IFormTooltipProps> {
}

export const VendorTooltip: FC<IVendorTooltipProps> = props => {
	return <FormTooltip
		icon={<VendorIcon/>}
		label={'lab.vendor'}
		{...props}
	>
		vendor form
	</FormTooltip>
}

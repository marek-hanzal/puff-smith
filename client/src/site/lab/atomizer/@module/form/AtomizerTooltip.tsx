import {FC} from "react";
import {CreateAtomizerForm} from "@/puff-smith/site/lab/atomizer";
import {AtomizerIcon, FormTooltip, IFormTooltipProps} from "@/puff-smith";

export interface IAtomizerTooltipProps extends Partial<IFormTooltipProps> {
}

export const AtomizerTooltip: FC<IAtomizerTooltipProps> = props => {
	return <FormTooltip
		icon={<AtomizerIcon/>}
		label={'lab.atomizer'}
		{...props}
	>
		<CreateAtomizerForm/>
	</FormTooltip>
}

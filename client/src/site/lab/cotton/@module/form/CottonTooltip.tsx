import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {CreateCottonForm} from "@/puff-smith/site/lab/cotton";
import {useOptionalFormItemContext} from "@leight-core/leight/dist";

export interface ICottonTooltipProps extends Partial<IFormTooltipProps> {
}

export const CottonTooltip: FC<ICottonTooltipProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <FormTooltip
		label={'lab.cotton'}
		{...props}
	>
		<CreateCottonForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</FormTooltip>
}

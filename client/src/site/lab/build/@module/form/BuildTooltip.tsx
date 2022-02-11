import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {CreateBuildForm} from "@/puff-smith/site/lab/build";
import {useOptionalFormItemContext} from "@leight-core/leight/dist";

export interface IBuildTooltipProps extends Partial<IFormTooltipProps> {
}

export const BuildTooltip: FC<IBuildTooltipProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <FormTooltip
		label={'lab.build'}
		{...props}
	>
		<CreateBuildForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</FormTooltip>
}

import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {useOptionalFormItemContext} from "@leight-core/leight";
import {CreateBuildForm} from "@/puff-smith/site/lab/build/@module/form/CreateBuildForm";

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

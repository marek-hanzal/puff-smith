import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {useOptionalFormItemContext} from "@leight-core/leight";
import {CreateMixtureForm} from "@/puff-smith/site/lab/mixture/@module/form/CreateMixtureForm";

export interface IMixtureTooltipProps extends Partial<IFormTooltipProps> {
}

export const MixtureTooltip: FC<IMixtureTooltipProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <FormTooltip
		label={'lab.mixture'}
		{...props}
	>
		<CreateMixtureForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</FormTooltip>
}

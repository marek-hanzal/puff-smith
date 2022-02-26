import {CoilIcon, FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {useOptionalFormItemContext} from "@leight-core/common";
import {CreateCoilForm} from "@/puff-smith/site/lab/coil/@module/form/CreateCoilForm";

export interface ICoilTooltipProps extends Partial<IFormTooltipProps> {
}

export const CoilTooltip: FC<ICoilTooltipProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <FormTooltip
		icon={<CoilIcon/>}
		label={'lab.coil'}
		{...props}
	>
		<CreateCoilForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</FormTooltip>
}

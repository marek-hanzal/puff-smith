import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {useBasesQueryInvalidate} from "@/sdk/puff-smith/api/lab/base/endpoint";
import {CreateBaseForm} from "@/puff-smith/site/lab/base";
import {useOptionalFormItemContext} from "@leight-core/leight/dist";

export interface IBaseTooltipProps extends Partial<IFormTooltipProps> {
}

export const BaseTooltip: FC<IBaseTooltipProps> = props => {
	const basesQueryInvalidate = useBasesQueryInvalidate();
	const formItem = useOptionalFormItemContext();
	return <FormTooltip
		label={'lab.base'}
		{...props}
	>
		<CreateBaseForm
			onSuccess={({response}) => {
				basesQueryInvalidate().then(() => {
					formItem?.setValue(response.id);
				});
			}}
		/>
	</FormTooltip>
}

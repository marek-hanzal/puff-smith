import {FC} from "react";
import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {useAtomizersQueryInvalidate} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {useOptionalFormItemContext} from "@leight-core/leight";
import {CreateAtomizerForm} from "@/puff-smith/site/lab/atomizer/@module/form/CreateAtomizerForm";

export interface IAtomizerTooltipProps extends Partial<IFormTooltipProps> {
}

export const AtomizerTooltip: FC<IAtomizerTooltipProps> = props => {
	const atomizersQueryInvalidate = useAtomizersQueryInvalidate();
	const formItem = useOptionalFormItemContext();
	return <FormTooltip
		label={'lab.atomizer'}
		{...props}
	>
		<CreateAtomizerForm
			onSuccess={({response}) => {
				atomizersQueryInvalidate().then(() => {
					formItem?.setValue(response.id);
				});
			}}
		/>
	</FormTooltip>
}

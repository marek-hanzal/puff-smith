import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {FC} from "react";
import {FormItem} from "@leight-core/leight/dist";
import {WireSelect, WireTooltip} from "@/puff-smith/site/lab/wire";

export interface ICreateCoilFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateCoilForm: FC<ICreateCoilFormProps> = props => {
	return <CreateDefaultForm {...props}>
		<FormItem
			field={'wireId'}
			labels={['lab.coil.wireId.label']}
			required
			help={<WireTooltip/>}
		>
			<WireSelect/>
		</FormItem>
	</CreateDefaultForm>
}

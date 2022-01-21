import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {FC} from "react";
import {FormItem} from "@leight-core/leight/dist";
import {VendorSelect, VendorTooltip} from "@/puff-smith/site/lab/vendor";

export interface ICreateAtomizerFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateAtomizerForm: FC<ICreateAtomizerFormProps> = props => {
	return <CreateDefaultForm {...props}>
		<FormItem field={'name'} labels={['lab.atomizer.name.label']} required/>
		<FormItem
			field={'vendorId'}
			labels={['lab.atomizer.vendorId.label']}
			help={<VendorTooltip/>}
		>
			<VendorSelect/>
		</FormItem>
	</CreateDefaultForm>
}

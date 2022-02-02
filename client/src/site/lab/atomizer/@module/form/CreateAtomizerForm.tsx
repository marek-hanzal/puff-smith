import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {VendorSelect, VendorTooltip} from "@/puff-smith/site/lab/vendor";
import {Divider} from "antd";
import {AtomizerIcon} from "@/puff-smith";

export interface ICreateAtomizerFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateAtomizerForm: FC<ICreateAtomizerFormProps> = props => {
	return <CreateDefaultForm {...props}>
		<FormItem field={'name'} labels={['lab.atomizer.name.label']} required/>
		<FormItem
			field={'vendorId'}
			labels={['lab.atomizer.vendorId.label']}
			required
			help={<VendorTooltip/>}
		>
			<VendorSelect/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<AtomizerIcon/>} label={'lab.atomizer.create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}

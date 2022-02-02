import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/vendor/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {Divider} from "antd";
import {VendorIcon} from "@/puff-smith";

export interface ICreateVendorFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateVendorForm: FC<ICreateVendorFormProps> = props => {
	return <CreateDefaultForm {...props}>
		<FormItem
			field={'name'}
			labels={['lab.vendor.name.label']}
			tooltip={'lab.vendor.name.label.tooltip'}
			required
		/>
		<Divider/>
		<Centered>
			<Submit icon={<VendorIcon/>} label={'lab.vendor.create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}

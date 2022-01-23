import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/wire/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {Divider, InputNumber} from "antd";
import {VendorSelect, VendorTooltip} from "@/puff-smith/site/lab/vendor";

export interface ICreateWireFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateWireForm: FC<ICreateWireFormProps> = props => {
	return <CreateDefaultForm {...props}>
		<FormItem
			field={'name'}
			labels={['lab.wire.name.label']}
			required
		/>
		<FormItem
			field={'vendorId'}
			labels={['lab.wire.vendorId.label']}
			required
			help={<VendorTooltip/>}
		>
			<VendorSelect/>
		</FormItem>
		<FormItem
			field={'description'}
			labels={['lab.wire.description.label']}
		/>
		<FormItem
			field={'ga'}
			labels={['lab.wire.ga.label']}
		>
			<InputNumber style={{width: '100%'}} min={20} max={48}/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit label={'lab.wire.create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}

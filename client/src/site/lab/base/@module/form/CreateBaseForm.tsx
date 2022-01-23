import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/base/endpoint";
import {FC} from "react";
import {Divider, InputNumber} from "antd";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {VendorSelect, VendorTooltip} from "@/puff-smith/site/lab/vendor";

export interface ICreateBaseFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateBaseForm: FC<ICreateBaseFormProps> = props => {
	return <CreateDefaultForm
		{...props}
	>
		<FormItem
			field={'name'}
			labels={['lab.base.name.label']}
			required
		/>
		<FormItem
			field={'vendorId'}
			labels={['lab.base.vendorId.label']}
			required
			help={<VendorTooltip/>}
		>
			<VendorSelect/>
		</FormItem>
		<FormItem
			field={'pg'}
			labels={['lab.base.pg.label']}
			required
		>
			<InputNumber
				style={{width: '100%'}}
				min={0}
				max={100}
			/>
		</FormItem>
		<FormItem
			field={'vg'}
			labels={['lab.base.vg.label']}
			required
		>
			<InputNumber
				style={{width: '100%'}}
				min={0}
				max={100}
			/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit label={'lab.base.create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}

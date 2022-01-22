import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/cotton/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {VendorSelect, VendorTooltip} from "@/puff-smith/site/lab/vendor";
import {Divider} from "antd";

export interface ICreateCottonFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateCottonForm: FC<ICreateCottonFormProps> = props => {
	return <CreateDefaultForm {...props}>
		<FormItem
			field={'name'}
			labels={['lab.cotton.name.label']}
			required
		/>
		<FormItem
			field={'description'}
			labels={['lab.cotton.description.label']}
		/>
		<FormItem
			field={'vendorId'}
			labels={['lab.cotton.vendorId.label']}
			required
			help={<VendorTooltip/>}
		>
			<VendorSelect/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit label={'lab.cotton.create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}

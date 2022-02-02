import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/mod/endpoint";
import {FC} from "react";
import {Divider, InputNumber, message} from "antd";
import {useTranslation} from "react-i18next";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {VendorSelect, VendorTooltip} from "@/puff-smith/site/lab/vendor";
import {ModIcon} from "@/puff-smith";

export interface ICreateModFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateModForm: FC<ICreateModFormProps> = props => {
	const {t} = useTranslation();
	return <CreateDefaultForm
		onSuccess={({navigate, response}) => {
			message.success(t("lab.mod.created.message", {data: response}));
			navigate("/lab/mod/list");
		}}
		toError={({error}) => ({
			"Duplicate entry [z_mod_name_unique] of [z_mod].": {id: ["name"], error},
		})}
		{...props}
	>
		<FormItem
			field={'name'}
			labels={['lab.mod.name.label']}
			required
		/>
		<FormItem
			field={'vendorId'}
			labels={['lab.mod.vendorId.label']}
			required
			help={<VendorTooltip/>}
		>
			<VendorSelect/>
		</FormItem>
		<FormItem
			field={'power'}
			labels={['lab.mod.power.label']}
		>
			<InputNumber
				style={{width: '100%'}}
				min={0}
				max={1000}
			/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<ModIcon/>} label={'lab.mod.create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}

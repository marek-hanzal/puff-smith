import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/driptip/endpoint";
import {FC} from "react";
import {Divider, message} from "antd";
import {useTranslation} from "react-i18next";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {VendorSelect, VendorTooltip} from "@/puff-smith/site/lab/vendor";

export interface ICreateDriptipFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateDriptipForm: FC<ICreateDriptipFormProps> = props => {
	const {t} = useTranslation();
	return <CreateDefaultForm
		onSuccess={({navigate, response}) => {
			message.success(t("lab.driptip.created.message", {data: response}));
			navigate("/lab/driptip/list");
		}}
		toError={({error}) => ({
			"Duplicate entry [z_driptip_name_unique] of [z_driptip].": {id: ["name"], error},
		})}
		{...props}
	>
		<FormItem
			field={'code'}
			labels={['lab.driptip.code.label']}
			required
		/>
		<FormItem
			field={'vendorId'}
			labels={['lab.driptip.vendorId.label']}
			required
			help={<VendorTooltip/>}
		>
			<VendorSelect/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit label={'lab.driptip.create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}

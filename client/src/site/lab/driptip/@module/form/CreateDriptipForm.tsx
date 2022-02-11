import {CreateDefaultForm, ICreateDefaultFormProps, useDriptipsQueryInvalidate} from "@/sdk/puff-smith/api/lab/driptip/endpoint";
import {FC} from "react";
import {Divider, message} from "antd";
import {useTranslation} from "react-i18next";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {VendorSelect, VendorTooltip} from "@/puff-smith/site/lab/vendor";
import {DriptipIcon} from "@/puff-smith";

export interface ICreateDriptipFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateDriptipForm: FC<ICreateDriptipFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const driptipsQueryInvalidate = useDriptipsQueryInvalidate();
	return <CreateDefaultForm
		onSuccess={response => {
			message.success(t("lab.driptip.created.message", {data: response.response}));
			driptipsQueryInvalidate();
			onSuccess?.(response);
		}}
		toError={({error}) => ({
			"Duplicate entry [z_driptip_name_unique] of [z_driptip].": {id: ["name"], error},
		})}
		{...props}
	>
		<FormItem
			field={'name'}
			labels={['lab.driptip.name.label']}
			tooltip={t('lab.driptip.name.label.tooltip')}
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
			<Submit icon={<DriptipIcon/>} label={'lab.driptip.create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}

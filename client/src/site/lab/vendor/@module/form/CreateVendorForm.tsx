import {CreateDefaultForm, ICreateDefaultFormProps, useVendorsQueryInvalidate} from "@/sdk/puff-smith/api/lab/vendor/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {Divider, message} from "antd";
import {VendorIcon} from "@/puff-smith";
import {useTranslation} from "react-i18next";

export interface ICreateVendorFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateVendorForm: FC<ICreateVendorFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const vendorsQueryInvalidate = useVendorsQueryInvalidate();
	return <CreateDefaultForm
		layout={'vertical'}
		onSuccess={response => {
			message.success(t("lab.vendor.create.success", {data: response.response}));
			vendorsQueryInvalidate();
			onSuccess?.(response);
		}}
		{...props}
	>
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

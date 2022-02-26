import {CreateDefaultForm, ICreateDefaultFormProps, useVendorsQueryInvalidate} from "@/sdk/puff-smith/api/lab/vendor/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit} from "@leight-core/common";
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
		translation={'lab.vendor'}
		onSuccess={response => {
			message.success(t("lab.vendor.create.success", {data: response.response}));
			vendorsQueryInvalidate();
			onSuccess?.(response);
		}}
		{...props}
	>
		<FormItem
			field={'name'}
			hasTooltip
			required
		/>
		<Divider/>
		<Centered>
			<Submit icon={<VendorIcon/>} label={'create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}

import {IPatchDefaultFormProps, PatchDefaultForm, useVendorQueryInvalidate, useVendorsQueryInvalidate} from "@/sdk/puff-smith/api/lab/vendor/endpoint";
import {FC} from "react";
import {Divider, message} from "antd";
import {useTranslation} from "react-i18next";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {VendorIcon} from "@/puff-smith";
import {VendorDto} from "@/sdk/puff-smith/vendor/dto";

export interface IPatchVendorFormProps extends Partial<IPatchDefaultFormProps> {
	vendor: VendorDto;
}

export const PatchVendorForm: FC<IPatchVendorFormProps> = ({onSuccess, vendor, ...props}) => {
	const {t} = useTranslation();
	const vendorQueryInvalidate = useVendorQueryInvalidate()
	const vendorsQueryInvalidate = useVendorsQueryInvalidate();
	return <PatchDefaultForm
		layout={'vertical'}
		translation={'lab.vendor'}
		onSuccess={response => {
			message.success(t("lab.vendor.updated.message", {data: response.response}));
			vendorQueryInvalidate();
			vendorsQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => vendor}
		toMutation={values => ({
			id: vendor.id,
			...values,
		})}
		toError={({error}) => ({
			"Duplicate entry [z_vendor_name_unique] of [z_vendor].": {id: ["name"], error},
		})}
		{...props}
	>
		<FormItem
			field={'name'}
			required
		/>
		<Divider/>
		<Centered>
			<Submit icon={<VendorIcon/>} label={'update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}

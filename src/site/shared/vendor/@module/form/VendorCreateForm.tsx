import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/vendor/create";
import {useVendorCountQueryInvalidate, useVendorQueryInvalidate} from "@/sdk/api/vendor/query";
import {Centered, FormItem, Submit} from "@leight-core/client";
import {Divider, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IVendorCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const VendorCreateForm: FC<IVendorCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const vendorQueryInvalidate = useVendorQueryInvalidate();
	const vendorCountQueryInvalidate = useVendorCountQueryInvalidate();
	return <CreateDefaultForm
		translation={"shared.vendor.create"}
		onSuccess={async response => {
			message.success(t("shared.vendor.create.success", response.response));
			await vendorQueryInvalidate();
			await vendorCountQueryInvalidate();
			onSuccess?.(response);
		}}
		{...props}
	>
		<FormItem field={"name"} required hasTooltip/>
		<Divider/>
		<Centered>
			<Submit icon={<LiquidIcon/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};

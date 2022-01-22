import {FC} from "react";
import {FormTooltip, IFormTooltipProps, VendorIcon} from "@/puff-smith";
import {CreateVendorForm} from "@/puff-smith/site/lab/vendor";
import {DrawerContext, useFormContext} from "@leight-core/leight";
import {message} from "antd";
import {useTranslation} from "react-i18next";
import {useVendorsQueryInvalidate} from "@/sdk/puff-smith/api/lab/vendor/endpoint";

export interface IVendorTooltipProps extends Partial<IFormTooltipProps> {
}

export const VendorTooltip: FC<IVendorTooltipProps> = props => {
	const {t} = useTranslation();
	const vendorsQueryInvalidate = useVendorsQueryInvalidate();
	const formContext = useFormContext();
	return <FormTooltip
		icon={<VendorIcon/>}
		label={'lab.vendor'}
		{...props}
	>
		<DrawerContext.Consumer>
			{drawerContext => <CreateVendorForm
				onSuccess={({response}) => {
					message.success(t("lab.vendor.create.success", {data: response}));
					vendorsQueryInvalidate().then(() => {
						drawerContext.setVisible(false);
						formContext.setValues({
							vendorId: response.id,
						});
					});
				}}
			/>}
		</DrawerContext.Consumer>
	</FormTooltip>
}

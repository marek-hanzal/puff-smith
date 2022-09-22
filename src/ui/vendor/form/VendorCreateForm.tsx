import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {VendorIcon} from "@/puff-smith/component/icon/VendorIcon";
import {IVendorCreateDefaultMobileFormProps, VendorCreateDefaultMobileForm} from "@/sdk/api/vendor/create";
import {useVendorQueryInvalidate} from "@/sdk/api/vendor/query";
import {ButtonBar, ButtonLink, MobileFormItem} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface IVendorCreateFormProps extends Partial<IVendorCreateDefaultMobileFormProps> {
}

export const VendorCreateForm: FC<IVendorCreateFormProps> = ({onSuccess, ...props}) => {
	const vendorQueryInvalidate = useVendorQueryInvalidate();
	return <VendorCreateDefaultMobileForm
		onSuccess={async response => {
			await vendorQueryInvalidate();
			onSuccess?.(response);
		}}
		withTokenProps={{
			tokens: [
				"*",
				"feature.aroma.create",
				"feature.booster.create",
				"feature.base.create",
				"feature.cotton.create",
				"feature.wire.create",
				"feature.mod.create",
				"feature.cell.create",
			],
			template: {
				extra: <>
					<Divider/>
					<ButtonBar split={<Divider type={"vertical"}/>}>
						<ButtonLink icon={<CertificateIcon/>} href={"/to/market/certificate"} label={"shared.certificate.link.button"}/>
						<ButtonLink icon={<LicenseIcon/>} href={"/to/market/license"} label={"shared.license.link.button"}/>
					</ButtonBar>
				</>
			}
		}}
		icon={<VendorIcon/>}
		{...props}
	>
		<MobileFormItem field={"name"} required hasTooltip/>
	</VendorCreateDefaultMobileForm>;
};

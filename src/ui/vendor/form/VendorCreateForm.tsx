import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {VendorIcon} from "@/puff-smith/component/icon/VendorIcon";
import {IVendorCreateDefaultFormProps, VendorCreateDefaultForm} from "@/sdk/api/vendor/create";
import {useVendorQueryInvalidate} from "@/sdk/api/vendor/query";
import {ButtonBar, ButtonLink, Centered, FormItem, Submit} from "@leight-core/client";
import {Divider, message} from "antd";
import {FC} from "react";

export interface IVendorCreateFormProps extends Partial<IVendorCreateDefaultFormProps> {
}

export const VendorCreateForm: FC<IVendorCreateFormProps> = ({onSuccess, ...props}) => {
	const vendorQueryInvalidate = useVendorQueryInvalidate();
	return <VendorCreateDefaultForm
		onSuccess={async response => {
			message.success(response.t("success", response.response));
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
		{...props}
	>
		<FormItem field={"name"} required hasTooltip/>
		<Divider/>
		<Centered>
			<Submit icon={<VendorIcon/>} label={"create"}/>
		</Centered>
	</VendorCreateDefaultForm>;
};

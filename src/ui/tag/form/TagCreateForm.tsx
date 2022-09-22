import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {toTagError} from "@/puff-smith/ui/tag/form/toTagError";
import {ITagCreateDefaultMobileFormProps, TagCreateDefaultMobileForm} from "@/sdk/api/tag/create";
import {useTagQueryInvalidate} from "@/sdk/api/tag/query";
import {ButtonBar, ButtonLink, MobileFormItem} from "@leight-core/client";
import {Divider} from "antd";
import {Stepper} from "antd-mobile";
import {FC} from "react";

export interface ITagCreateFormProps extends Partial<ITagCreateDefaultMobileFormProps> {
}

export const TagCreateForm: FC<ITagCreateFormProps> = ({onSuccess, ...props}) => {
	const tagQueryInvalidate = useTagQueryInvalidate();
	return <TagCreateDefaultMobileForm
		onSuccess={async response => {
			await tagQueryInvalidate();
			onSuccess?.(response);
		}}
		withTokenProps={{
			tokens: [
				"*",
				"feature.aroma.create",
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
		toError={toTagError}
		{...props}
	>
		<MobileFormItem field={"tag"} required hasTooltip/>
		<MobileFormItem field={"sort"} hasTooltip>
			<Stepper min={-10000} max={10000}/>
		</MobileFormItem>
		<MobileFormItem field={"group"} required hasTooltip/>
		<MobileFormItem field={"translation"} required hasTooltip/>
	</TagCreateDefaultMobileForm>;
};

import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {AromaFields} from "@/puff-smith/ui/aroma/form/AromaFields";
import {AromaPatchDefaultMobileForm, IAromaPatchDefaultMobileFormProps} from "@/sdk/api/aroma/patch";
import {useAromaQueryInvalidate} from "@/sdk/api/aroma/query";
import {ButtonBar, ButtonLink} from "@leight-core/client";
import {Divider, message} from "antd";
import {FC} from "react";

export interface IAromaPatchFormProps extends Partial<IAromaPatchDefaultMobileFormProps> {
}

export const AromaPatchForm: FC<IAromaPatchFormProps> = ({onSuccess, ...props}) => {
	const aromaQueryInvalidate = useAromaQueryInvalidate();
	return <AromaPatchDefaultMobileForm
		onSuccess={async response => {
			message.success(response.t("success", response.response));
			await aromaQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => ({
			content: 12,
			volume: 60,
			steep: 14,
			nicotine: 0,
			pg: 100,
		})}
		toMutation={({pg, ...values}) => ({
			...values,
			pg,
			vg: 100 - pg,
		})}
		withTokenProps={{
			tokens: [
				"*",
				"feature.aroma.patch",
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
		icon={<AromaIcon/>}
		{...props}
	>
		<AromaFields/>
	</AromaPatchDefaultMobileForm>;
};

import {AromaIcon}               from "@/puff-smith/component/icon/AromaIcon";
import {CertificateIcon}         from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon}             from "@/puff-smith/component/icon/LicenseIcon";
import {AromaFields}             from "@/puff-smith/ui/aroma/form/AromaFields";
import {toAromaError}            from "@/puff-smith/ui/aroma/form/toAromaError";
import {
	AromaCreateDefaultMobileForm,
	IAromaCreateDefaultMobileFormProps
}                                from "@/sdk/api/aroma/create";
import {useAromaQueryInvalidate} from "@/sdk/api/aroma/query";
import {
	ButtonBar,
	ButtonLink
}                                from "@leight-core/viv";
import {Divider}                 from "antd";
import {FC}                      from "react";

export interface IAromaCreateFormProps extends Partial<IAromaCreateDefaultMobileFormProps> {
}

export const AromaCreateForm: FC<IAromaCreateFormProps> = ({onSuccess, ...props}) => {
	const aromaQueryInvalidate = useAromaQueryInvalidate();
	return <AromaCreateDefaultMobileForm
		onSuccess={async response => {
			await aromaQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => ({
			content:  12,
			volume:   60,
			steep:    14,
			nicotine: 0,
			pg:       100,
		})}
		toMutation={({pg, ...values}) => ({
			...values,
			pg,
			vg: 100 - pg,
		})}
		withTokenProps={{
			tokens:   [
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
		toError={toAromaError}
		icon={<AromaIcon/>}
		{...props}
	>
		<AromaFields/>
	</AromaCreateDefaultMobileForm>;
};

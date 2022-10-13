import {AromaIcon}               from "@/puff-smith/component/icon/AromaIcon";
import {CertificateIcon}         from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon}             from "@/puff-smith/component/icon/LicenseIcon";
import {IAroma}                  from "@/puff-smith/service/aroma/interface";
import {AromaFields}             from "@/puff-smith/ui/aroma/form/AromaFields";
import {toAromaError}            from "@/puff-smith/ui/aroma/form/toAromaError";
import {
	AromaPatchDefaultMobileForm,
	IAromaPatchDefaultMobileFormProps
}                                from "@/sdk/api/aroma/patch";
import {useAromaQueryInvalidate} from "@/sdk/api/aroma/query";
import {
	ButtonBar,
	ButtonLink
}                                from "@leight-core/viv";
import {Divider}                 from "antd";
import {FC}                      from "react";

export interface IAromaPatchFormProps extends Partial<IAromaPatchDefaultMobileFormProps> {
	aroma: IAroma;
}

export const AromaPatchForm: FC<IAromaPatchFormProps> = ({aroma, onSuccess, ...props}) => {
	const aromaQueryInvalidate = useAromaQueryInvalidate();
	return <AromaPatchDefaultMobileForm
		onSuccess={async response => {
			await aromaQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => ({
			...aroma,
		})}
		toMutation={({pg, ...values}) => ({
			id: aroma.id,
			...values,
			pg,
			vg: 100 - pg,
		})}
		withTokenProps={{
			tokens:   [
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
		toError={toAromaError}
		icon={<AromaIcon/>}
		{...props}
	>
		<AromaFields/>
	</AromaPatchDefaultMobileForm>;
};

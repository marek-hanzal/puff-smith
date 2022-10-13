import {CertificateIcon}               from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon}                   from "@/puff-smith/component/icon/LicenseIcon";
import {TranslationIcon}               from "@/puff-smith/component/icon/TranslationIcon";
import {toTranslationError}            from "@/puff-smith/ui/translation/form/toTranslationError";
import {TranslationFields}             from "@/puff-smith/ui/translation/form/TranslationFields";
import {
	ITranslationPatchDefaultMobileFormProps,
	TranslationPatchDefaultMobileForm
}                                      from "@/sdk/api/translation/patch";
import {useTranslationQueryInvalidate} from "@/sdk/api/translation/query";
import {
	ButtonBar,
	ButtonLink,
	ITranslation
}                                      from "@leight-core/viv";
import {Divider}                       from "antd";
import {FC}                            from "react";

export interface ITranslationPatchFormProps extends Partial<Omit<ITranslationPatchDefaultMobileFormProps, "translation">> {
	translation: ITranslation;
}

export const TranslationPatchForm: FC<ITranslationPatchFormProps> = ({translation, onSuccess, ...props}) => {
	const translationQueryInvalidate = useTranslationQueryInvalidate();
	return <TranslationPatchDefaultMobileForm
		onSuccess={async response => {
			await translationQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => ({
			...translation,
			label: translation.key,
			text:  translation.value,
		})}
		toMutation={values => ({
			id: translation.id,
			...values,
		})}
		withTokenProps={{
			tokens:   [
				"*",
				"feature.translation.patch",
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
		toError={toTranslationError}
		icon={<TranslationIcon/>}
		{...props}
	>
		<TranslationFields/>
	</TranslationPatchDefaultMobileForm>;
};

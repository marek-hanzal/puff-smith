import {CertificateIcon}               from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon}                   from "@/puff-smith/component/icon/LicenseIcon";
import {TranslationIcon}               from "@/puff-smith/component/icon/TranslationIcon";
import {toTranslationError}            from "@/puff-smith/ui/translation/form/toTranslationError";
import {TranslationFields}             from "@/puff-smith/ui/translation/form/TranslationFields";
import {
	ITranslationCreateDefaultMobileFormProps,
	TranslationCreateDefaultMobileForm
}                                      from "@/sdk/api/translation/create";
import {useTranslationQueryInvalidate} from "@/sdk/api/translation/query";
import {
	ButtonBar,
	ButtonLink
}                                      from "@leight-core/client";
import {Divider}                       from "antd";
import i18n                            from "i18next";
import {FC}                            from "react";

export interface ITranslationCreateFormProps extends Partial<ITranslationCreateDefaultMobileFormProps> {
}

export const TranslationCreateForm: FC<ITranslationCreateFormProps> = ({onSuccess, ...props}) => {
	const translationQueryInvalidate = useTranslationQueryInvalidate();
	return <TranslationCreateDefaultMobileForm
		onSuccess={async response => {
			await translationQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => ({
			language: i18n.language,
		})}
		toMutation={values => values}
		withTokenProps={{
			tokens:   [
				"*",
				"feature.translation.create",
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
	</TranslationCreateDefaultMobileForm>;
};

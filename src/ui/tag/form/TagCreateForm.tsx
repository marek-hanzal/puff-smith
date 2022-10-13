import {CertificateIcon}               from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon}                   from "@/puff-smith/component/icon/LicenseIcon";
import {toTagError}                    from "@/puff-smith/ui/tag/form/toTagError";
import {
	ITagCreateDefaultMobileFormProps,
	TagCreateDefaultMobileForm
}                                      from "@/sdk/api/tag/create";
import {useTagQueryInvalidate}         from "@/sdk/api/tag/query";
import {useTranslationQueryInvalidate} from "@/sdk/api/translation";
import {useTranslationCreateMutation}  from "@/sdk/api/translation/create";
import {useTranslationPushMutation}    from "@/sdk/api/translation/push";
import {
	ButtonBar,
	ButtonLink,
	MobileFormItem
}                                      from "@leight-core/viv";
import {Divider}                       from "antd";
import {Stepper}                       from "antd-mobile";
import i18n                            from "i18next";
import {FC}                            from "react";

export interface ITagCreateFormProps extends Partial<ITagCreateDefaultMobileFormProps> {
}

export const TagCreateForm: FC<ITagCreateFormProps> = ({onSuccess, ...props}) => {
	const tagQueryInvalidate         = useTagQueryInvalidate();
	const translationPushMutation    = useTranslationPushMutation();
	const translationCreateMutation  = useTranslationCreateMutation();
	const translationQueryInvalidate = useTranslationQueryInvalidate();
	return <TagCreateDefaultMobileForm
		onSuccess={async response => {
			await tagQueryInvalidate();
			await Promise.all(i18n.languages.map(async (language, i) => {
				/**
				 * A little trick: push only native language user is using, and the rest just create; the creation
				 * could fail as the translation can already be present.
				 */
				const mutation = i > 0 ? translationCreateMutation : translationPushMutation;
				return mutation.mutate({
					language,
					text:  response.values.translation,
					label: `common.${response.values.group}.${response.values.tag}`,
				}, {
					onError:   e => console.error(e),
					onSettled: async () => {
						await translationQueryInvalidate();
						onSuccess?.(response);
					},
				});
			}));
		}}
		toMutation={({translation, ...values}) => values}
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
		toError={toTagError}
		{...props}
	>
		<MobileFormItem field={"tag"} required hasTooltip/>
		<MobileFormItem field={"translation"} required hasTooltip/>
		<MobileFormItem field={"group"} required hasTooltip/>
		<MobileFormItem field={"sort"} hasTooltip>
			<Stepper min={-10000} max={10000}/>
		</MobileFormItem>
	</TagCreateDefaultMobileForm>;
};

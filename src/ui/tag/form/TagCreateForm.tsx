import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {toTagError} from "@/puff-smith/ui/tag/form/toTagError";
import {ITagCreateDefaultMobileFormProps, TagCreateDefaultMobileForm} from "@/sdk/api/tag/create";
import {useTagQueryInvalidate} from "@/sdk/api/tag/query";
import {useTranslationQueryInvalidate} from "@/sdk/api/translation";
import {useTranslationPushMutation} from "@/sdk/api/translation/push";
import {ButtonBar, ButtonLink, MobileFormItem} from "@leight-core/client";
import {Divider} from "antd";
import {Stepper} from "antd-mobile";
import i18next from "i18next";
import {FC} from "react";

export interface ITagCreateFormProps extends Partial<ITagCreateDefaultMobileFormProps> {
}

export const TagCreateForm: FC<ITagCreateFormProps> = ({onSuccess, ...props}) => {
	const tagQueryInvalidate = useTagQueryInvalidate();
	const translationPushMutation = useTranslationPushMutation();
	const translationQueryInvalidate = useTranslationQueryInvalidate();
	return <TagCreateDefaultMobileForm
		onSuccess={async response => {
			await tagQueryInvalidate();
			await translationPushMutation.mutate({
				language: i18next.language,
				text: response.values.translation,
				label: `common.${response.values.group}.${response.values.tag}`,
			}, {
				onSettled: async () => {
					await translationQueryInvalidate();
					onSuccess?.(response);
				},
			});
		}}
		toMutation={({translation, ...values}) => values}
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
		<MobileFormItem field={"translation"} required hasTooltip/>
		<MobileFormItem field={"group"} required hasTooltip/>
		<MobileFormItem field={"sort"} hasTooltip>
			<Stepper min={-10000} max={10000}/>
		</MobileFormItem>
	</TagCreateDefaultMobileForm>;
};

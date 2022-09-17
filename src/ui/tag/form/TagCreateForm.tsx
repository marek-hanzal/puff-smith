import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {ITagCreateDefaultFormProps, TagCreateDefaultForm} from "@/sdk/api/tag/create";
import {useTagQueryInvalidate} from "@/sdk/api/tag/query";
import {ButtonBar, ButtonLink, Centered, FormItem, Submit} from "@leight-core/client";
import {Divider, InputNumber, message} from "antd";
import {FC} from "react";

export interface ITagCreateFormProps extends Partial<ITagCreateDefaultFormProps> {
}

export const TagCreateForm: FC<ITagCreateFormProps> = ({onSuccess, ...props}) => {
	const tagQueryInvalidate = useTagQueryInvalidate();
	return <TagCreateDefaultForm
		onSuccess={async response => {
			message.success(response.t("shared.tag.create.success", response.response));
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
		{...props}
	>
		<FormItem field={"tag"} required hasTooltip/>
		<FormItem field={"sort"} hasTooltip>
			<InputNumber min={0} style={{width: "100%"}}/>
		</FormItem>
		<FormItem field={"group"} required hasTooltip/>
		<Divider/>
		<Centered>
			<Submit label={"create"}/>
		</Centered>
	</TagCreateDefaultForm>;
};

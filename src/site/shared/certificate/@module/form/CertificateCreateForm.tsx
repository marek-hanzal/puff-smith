import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {TokenCreateInline} from "@/puff-smith/site/shared/token/@module/form/TokenCreateInline";
import {TokenSelect} from "@/puff-smith/site/shared/token/@module/form/TokenSelect";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/certificate/create";
import {useCertificateQueryInvalidate} from "@/sdk/api/certificate/query";
import {Centered, FormItem, Submit} from "@leight-core/client";
import {Divider, InputNumber, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ICertificateCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CertificateCreateForm: FC<ICertificateCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const certificateQueryInvalidate = useCertificateQueryInvalidate();
	return <CreateDefaultForm
		translation={"shared.certificate.create"}
		onSuccess={async response => {
			message.success(t("shared.certificate.create.success", response.response));
			await certificateQueryInvalidate();
			onSuccess?.(response);
		}}
		withTokenProps={{
			tokens: [
				"feature.certificate.create",
			],
		}}
		{...props}
	>
		<FormItem field={"name"} required hasTooltip/>
		<FormItem field={"code"} hasTooltip/>
		<FormItem field={"cost"} hasTooltip>
			<InputNumber
				min={0}
				max={1000000}
				step={250}
				style={{width: "100%"}}
			/>
		</FormItem>
		<FormItem field={"tokens"} hasTooltip extra={<TokenCreateInline/>}>
			<TokenSelect
				mode={"multiple"}
			/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<CertificateIcon/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};

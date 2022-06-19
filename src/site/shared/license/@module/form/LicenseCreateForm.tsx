import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {TokenCreateInline} from "@/puff-smith/site/shared/token/@module/form/TokenCreateInline";
import {TokenSelect} from "@/puff-smith/site/shared/token/@module/form/TokenSelect";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/license/create";
import {useLicenseCountQueryInvalidate, useLicenseQueryInvalidate} from "@/sdk/api/license/query";
import {Centered, FormItem, Submit} from "@leight-core/client";
import {Divider, InputNumber, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ILicenseCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const LicenseCreateForm: FC<ILicenseCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const licenseQueryInvalidate = useLicenseQueryInvalidate();
	const licenseCountQueryInvalidate = useLicenseCountQueryInvalidate();
	return <CreateDefaultForm
		translation={"shared.license.create"}
		onSuccess={async response => {
			message.success(t("shared.license.create.success", response.response));
			await licenseQueryInvalidate();
			await licenseCountQueryInvalidate();
			onSuccess?.(response);
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
		<FormItem field={"renew"} hasTooltip>
			<InputNumber
				min={0}
				max={1000000}
				step={250}
				style={{width: "100%"}}
			/>
		</FormItem>
		<FormItem field={"duration"} hasTooltip>
			<InputNumber
				min={0}
				max={365}
				step={1}
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
			<Submit icon={<LicenseIcon/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};

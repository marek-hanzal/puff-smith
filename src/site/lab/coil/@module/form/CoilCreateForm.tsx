import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {CoilIcon} from "@/puff-smith/component/icon/CoilIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {WireSelect} from "@/puff-smith/site/inventory/wire/@module/form/WireSelect";
import {CoilSizeInput} from "@/puff-smith/site/shared/coil/@module/form/CoilSizeInput";
import {CoilWrapsInput} from "@/puff-smith/site/shared/coil/@module/form/CoilWrapsInput";
import {WireCreateInline} from "@/puff-smith/site/shared/wire/@module/form/WireCreateInline";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/coil/create";
import {useCoilInventoryQueryInvalidate} from "@/sdk/api/inventory/coil/query";
import {ButtonBar, ButtonLink, Centered, FormItem, Submit} from "@leight-core/client";
import {Divider, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ICoilCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CoilCreateForm: FC<ICoilCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const coilInventoryQueryInvalidate = useCoilInventoryQueryInvalidate();
	return <CreateDefaultForm
		translation={"lab.coil.create"}
		onSuccess={async result => {
			message.success(t("lab.coil.create.success"));
			await coilInventoryQueryInvalidate();
			onSuccess?.(result);
		}}
		toForm={() => ({
			size: 0.25,
			wraps: 7,
		})}
		withTokenProps={{
			tokens: [
				"*",
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
		<FormItem field={"size"}>
			<CoilSizeInput/>
		</FormItem>
		<FormItem field={"wraps"}>
			<CoilWrapsInput/>
		</FormItem>
		<FormItem field={"wireId"} required extra={<WireCreateInline/>}>
			<WireSelect
				allowClear
			/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<CoilIcon/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};

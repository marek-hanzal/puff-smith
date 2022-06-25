import {BoosterIcon} from "@/puff-smith/component/icon/BoosterIcon";
import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {VendorCreateInline} from "@/puff-smith/site/shared/vendor/@module/form/VendorCreateInline";
import {VendorSelect} from "@/puff-smith/site/shared/vendor/@module/form/VendorSelect";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/booster/create";
import {useBoosterQueryInvalidate} from "@/sdk/api/booster/query";
import {useBoosterMarketQueryInvalidate} from "@/sdk/api/market/booster/query";
import {ButtonBar, ButtonLink, Centered, FormItem, Submit} from "@leight-core/client";
import {Divider, InputNumber, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IBoosterCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const BoosterCreateForm: FC<IBoosterCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const boosterQueryInvalidate = useBoosterQueryInvalidate();
	const boosterMarketQueryInvalidate = useBoosterMarketQueryInvalidate();
	return <CreateDefaultForm
		translation={"shared.booster.create"}
		onSuccess={async response => {
			message.success(t("shared.booster.create.success", response.response));
			await boosterQueryInvalidate();
			await boosterMarketQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => ({
			volume: 10,
			cost: 20,
		})}
		toMutation={({vgpg, ...values}) => ({
			...values,
			pg: 100 - vgpg,
			vg: vgpg,
			withInventory: true,
		})}
		withTokenProps={{
			tokens: [
				"feature.booster.create",
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
		<FormItem field={"name"} required hasTooltip/>
		<FormItem field={"code"} hasTooltip/>
		<FormItem field={"vendorId"} required extra={<VendorCreateInline/>}>
			<VendorSelect/>
		</FormItem>
		<FormItem field={"cost"} hasTooltip required>
			<InputNumber min={0} max={9999} style={{width: "100%"}}/>
		</FormItem>
		<FormItem field={"vgpg"} hasTooltip required>
			<InputNumber min={0} max={100} style={{width: "100%"}}/>
		</FormItem>
		<FormItem field={"nicotine"} hasTooltip required>
			<InputNumber min={1} max={50} style={{width: "100%"}}/>
		</FormItem>
		<FormItem field={"volume"} hasTooltip required>
			<InputNumber min={0} max={1000} style={{width: "100%"}}/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<BoosterIcon/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};

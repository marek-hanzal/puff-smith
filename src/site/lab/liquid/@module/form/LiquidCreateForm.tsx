import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {AromaSelect} from "@/puff-smith/site/inventory/aroma/@module/form/AromaSelect";
import {AromaCreateInline} from "@/puff-smith/site/shared/aroma/@module/form/AromaCreateInline";
import {BaseCreateInline} from "@/puff-smith/site/shared/base/@module/form/BaseCreateInline";
import {BaseSelect} from "@/puff-smith/site/shared/base/@module/form/BaseSelect";
import {BoosterCreateInline} from "@/puff-smith/site/shared/booster/@module/form/BoosterCreateInline";
import {BoosterSelect} from "@/puff-smith/site/shared/booster/@module/form/BoosterSelect";
import {useCheckPrice} from "@/puff-smith/site/shared/price/@module/hook/useCheckPrice";
import {useLiquidQueryInvalidate} from "@/sdk/api/lab/liquid/query";
import {IStandaloneDefaultFormProps, StandaloneDefaultForm} from "@/sdk/api/lab/liquid/standalone";
import {usePuffiesQueryInvalidate} from "@/sdk/api/user/puffies";
import {ButtonBar, ButtonLink, Centered, DatePicker, FormItem, Submit} from "@leight-core/client";
import {Divider, InputNumber, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ILiquidCreateFormProps extends Partial<IStandaloneDefaultFormProps> {
}

export const LiquidCreateForm: FC<ILiquidCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const puffiesQueryInvalidate = usePuffiesQueryInvalidate();
	const liquidQueryInvalidate = useLiquidQueryInvalidate();
	const checkPrice = useCheckPrice("lab.liquid.create");
	return <StandaloneDefaultForm
		translation={"lab.liquid.create"}
		onSuccess={async request => {
			message.success(t("lab.mixture.liquid.create.success"));
			await puffiesQueryInvalidate();
			await liquidQueryInvalidate();
			onSuccess?.(request);
		}}
		toForm={() => ({
			nicotine: 0,
		})}
		withTokenProps={{
			tokens: [
				"feature.liquid.create",
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
		<FormItem field={"aromaId"} required extra={<AromaCreateInline/>}>
			<AromaSelect/>
		</FormItem>
		<FormItem field={"boosterId"} extra={<BoosterCreateInline/>}>
			<BoosterSelect/>
		</FormItem>
		<FormItem field={"baseId"} extra={<BaseCreateInline/>}>
			<BaseSelect/>
		</FormItem>
		<FormItem field={"nicotine"}>
			<InputNumber
				min={0}
				max={50}
				step={1}
				style={{width: "100%"}}
			/>
		</FormItem>
		<FormItem field={"mixed"}>
			<DatePicker/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit
				icon={<LiquidIcon/>}
				disabled={checkPrice.notPass}
				label={"create"}
			/>
		</Centered>
	</StandaloneDefaultForm>;
};

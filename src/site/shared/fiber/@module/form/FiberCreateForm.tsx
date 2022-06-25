import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {WireIcon} from "@/puff-smith/component/icon/WireIcon";
import {TagSelect} from "@/puff-smith/site/shared/tag/@module/form/TagSelect";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/fiber/create";
import {useFiberQueryInvalidate} from "@/sdk/api/fiber/query";
import {ButtonBar, ButtonLink, Centered, FormContext, FormItem, Submit} from "@leight-core/client";
import {Divider, InputNumber, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

/**
 * https://mwswire.com/wp-content/uploads/2016/10/AWG-gauge-to-Millimeter-Conversion.pdf
 */
const gaToMm: Record<number, number> = {
	1: 7.348,
	2: 6.543,
	3: 5.827,
	4: 5.189,
	5: 4.621,
	6: 4.115,
	7: 3.665,
	8: 3.264,
	9: 2.906,
	10: 2.588,
	11: 2.304,
	12: 2.052,
	13: 1.829,
	14: 1.628,
	15: 1.450,
	16: 1.291,
	17: 1.150,
	18: 1.024,
	19: 0.9119,
	20: 0.8128,
	21: 0.7239,
	22: 0.6426,
	23: 0.5740,
	24: 0.5106,
	25: 0.4547,
	26: 0.4038,
	27: 0.3606,
	28: 0.3200,
	29: 0.2870,
	30: 0.2540,
	31: 0.2261,
	32: 0.2032,
	33: 0.1803,
	34: 0.1601,
	35: 0.1422,
	36: 0.1270,
	37: 0.1143,
	38: 0.1016,
	39: 0.0889,
	40: 0.0787,
	41: 0.0711,
	42: 0.0635,
	43: 0.0559,
	44: 0.0508,
	45: 0.0457,
	46: 0.0406,
	47: 0.0350,
	48: 0.0305,
	49: 0.0279,
	50: 0.0254,
};

export interface IFiberCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const FiberCreateForm: FC<IFiberCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const fiberQueryInvalidate = useFiberQueryInvalidate();
	return <CreateDefaultForm
		translation={"shared.fiber.create"}
		onSuccess={async response => {
			message.success(t("shared.fiber.create.success"));
			await fiberQueryInvalidate();
			onSuccess?.(response);
		}}
		withTokenProps={{
			tokens: [
				"feature.wire.create",
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
		<FormContext.Consumer>
			{formContext => <>
				<FormItem field={"ga"} required>
					<InputNumber
						min={0}
						max={52}
						step={1}
						style={{width: "100%"}}
						onChange={value => {
							formContext.setValues({
								mm: gaToMm[value] || undefined,
							});
						}}
					/>
				</FormItem>
				<FormItem field={"mm"} required extra={t("shared.fiber.mm.hint")}>
					<InputNumber min={0.0001} max={10} step={0.0001} style={{width: "100%"}}/>
				</FormItem>
				<FormItem field={"materialId"} required>
					<TagSelect
						applyFilter={{
							group: "material",
						}}
					/>
				</FormItem>
			</>}
		</FormContext.Consumer>
		<Divider/>
		<Centered>
			<Submit icon={<WireIcon/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};

import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {TagSelect} from "@/puff-smith/site/shared/tag/@module/form/TagSelect";
import {VendorCreateInline} from "@/puff-smith/site/shared/vendor/@module/form/VendorCreateInline";
import {VendorSelect} from "@/puff-smith/site/shared/vendor/@module/form/VendorSelect";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/atomizer/create";
import {useAtomizerQueryInvalidate} from "@/sdk/api/atomizer/query";
import {useAtomizerInventoryQueryInvalidate} from "@/sdk/api/inventory/atomizer/query";
import {useAtomizerMarketQueryInvalidate} from "@/sdk/api/market/atomizer/query";
import {ButtonBar, ButtonLink, Centered, FormItem, Submit, SwitchItem} from "@leight-core/client";
import {Col, Divider, InputNumber, message, Row} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IAtomizerCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const AtomizerCreateForm: FC<IAtomizerCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const atomizerQueryInvalidate = useAtomizerQueryInvalidate();
	const atomizerMarketQueryInvalidate = useAtomizerMarketQueryInvalidate();
	const atomizerInventoryQueryInvalidate = useAtomizerInventoryQueryInvalidate();
	return <CreateDefaultForm
		translation={"shared.atomizer.create"}
		onSuccess={async ({response, ...rest}) => {
			message.success(t("shared.atomizer.create.success", response));
			await atomizerQueryInvalidate();
			await atomizerMarketQueryInvalidate();
			await atomizerInventoryQueryInvalidate();
			await onSuccess?.({response, ...rest});
		}}
		toForm={() => ({
			squonk: false,
			coilMin: 0.2,
			coilMax: 0.35,
			wrapsMin: 5,
			wrapsMax: 8,
		})}
		toMutation={values => ({
			...values,
			withInventory: true,
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
		<Row gutter={32}>
			<Col span={8}>
				<FormItem field={"name"} required hasTooltip/>
				<FormItem field={"code"} hasTooltip/>
				<FormItem field={"vendorId"} required extra={<VendorCreateInline/>}>
					<VendorSelect allowClear/>
				</FormItem>
				<SwitchItem field={"isHybrid"}/>
			</Col>
			<Col span={8}>
				<FormItem field={"typeId"} hasTooltip required>
					<TagSelect
						applyFilter={{
							group: "atomizer-type",
						}}
					/>
				</FormItem>
				<FormItem field={"drawIds"} hasTooltip>
					<TagSelect
						translation={"common.draw"}
						mode={"multiple"}
						applyFilter={{
							group: "draw",
						}}
					/>
				</FormItem>
				<FormItem field={"cost"} hasTooltip required>
					<InputNumber min={0} max={9999} style={{width: "100%"}}/>
				</FormItem>
				<SwitchItem field={"squonk"}/>
			</Col>
			<Col span={8}>
				<FormItem field={"coilMin"} hasTooltip required>
					<InputNumber min={0} max={0.5} step={0.05} style={{width: "100%"}}/>
				</FormItem>
				<FormItem field={"coilMax"} hasTooltip required>
					<InputNumber min={0} max={0.5} step={0.05} style={{width: "100%"}}/>
				</FormItem>
				<FormItem field={"wrapsMin"} hasTooltip required>
					<InputNumber min={3} max={16} step={1} style={{width: "100%"}}/>
				</FormItem>
				<FormItem field={"wrapsMax"} hasTooltip required>
					<InputNumber min={3} max={16} step={1} style={{width: "100%"}}/>
				</FormItem>
			</Col>
		</Row>
		<Divider/>
		<Centered>
			<Submit icon={<AtomizerIcon/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};

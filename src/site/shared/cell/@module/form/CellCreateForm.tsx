import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {WireIcon} from "@/puff-smith/component/icon/WireIcon";
import {TagSelect} from "@/puff-smith/site/shared/tag/@module/form/TagSelect";
import {VendorCreateInline} from "@/puff-smith/site/shared/vendor/@module/form/VendorCreateInline";
import {VendorSelect} from "@/puff-smith/site/shared/vendor/@module/form/VendorSelect";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/cell/create";
import {useCellQueryInvalidate} from "@/sdk/api/cell/query";
import {ButtonBar, ButtonLink, Centered, FormItem, Submit} from "@leight-core/client";
import {Divider, InputNumber, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ICellCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CellCreateForm: FC<ICellCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const cellQueryInvalidate = useCellQueryInvalidate();
	return <CreateDefaultForm
		translation={"shared.cell.create"}
		onSuccess={async response => {
			message.success(t("shared.cell.create.success", response.response));
			await cellQueryInvalidate();
			onSuccess?.(response);
		}}
		toMutation={values => ({
			...values,
			withInventory: true,
		})}
		toForm={() => ({
			voltage: 3.7,
			voltageMax: 4.2,
			capacity: 3000,
			drain: 25,
		})}
		withTokenProps={{
			tokens: [
				"feature.cell.create",
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
		<FormItem field={"name"} required/>
		<FormItem field={"code"}/>
		<FormItem field={"voltage"} required>
			<InputNumber
				min={0}
				max={240}
				step={0.01}
				style={{width: "100%"}}
			/>
		</FormItem>
		<FormItem field={"voltageMax"} required>
			<InputNumber
				min={0}
				max={240}
				step={0.01}
				style={{width: "100%"}}
			/>
		</FormItem>
		<FormItem field={"capacity"} required>
			<InputNumber
				min={0}
				max={9999}
				step={250}
				style={{width: "100%"}}
			/>
		</FormItem>
		<FormItem field={"drain"} required>
			<InputNumber
				min={0}
				max={100}
				step={5}
				style={{width: "100%"}}
			/>
		</FormItem>
		<FormItem field={"typeId"} required>
			<TagSelect
				applyFilter={{
					group: "cell-type",
				}}
			/>
		</FormItem>
		<FormItem field={"vendorId"} required extra={<VendorCreateInline/>}>
			<VendorSelect/>
		</FormItem>
		<FormItem field={"cost"} hasTooltip required>
			<InputNumber min={0} max={9999} style={{width: "100%"}}/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<WireIcon/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};

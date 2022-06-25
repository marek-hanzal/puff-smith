import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {WireIcon} from "@/puff-smith/component/icon/WireIcon";
import {FiberCreateInline} from "@/puff-smith/site/shared/fiber/@module/form/FiberCreateInline";
import {FiberSelect} from "@/puff-smith/site/shared/fiber/@module/form/FiberSelect";
import {TagSelect} from "@/puff-smith/site/shared/tag/@module/form/TagSelect";
import {VendorCreateInline} from "@/puff-smith/site/shared/vendor/@module/form/VendorCreateInline";
import {VendorSelect} from "@/puff-smith/site/shared/vendor/@module/form/VendorSelect";
import {useWireInventoryQueryInvalidate} from "@/sdk/api/inventory/wire/query";
import {useWireMarketQueryInvalidate} from "@/sdk/api/market/wire/query";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/wire/create";
import {useWireQueryInvalidate} from "@/sdk/api/wire/query";
import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import {ButtonBar, ButtonLink, Centered, FormItem, Submit, SwitchItem} from "@leight-core/client";
import {Button, Col, Divider, Form, InputNumber, message, Row} from "antd";
import {FC, useState} from "react";
import {useTranslation} from "react-i18next";

export interface IWireCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const WireCreateForm: FC<IWireCreateFormProps> = ({onSuccess, ...props}) => {
	const [itemCount, setItemCount] = useState(0);
	const {t} = useTranslation();
	const wireQueryInvalidate = useWireQueryInvalidate();
	const wireInventoryQueryInvalidate = useWireInventoryQueryInvalidate();
	const wireMarketQueryInvalidate = useWireMarketQueryInvalidate();
	return <CreateDefaultForm
		translation={"shared.wire.create"}
		onSuccess={async response => {
			message.success(t("shared.wire.create.success"));
			await wireQueryInvalidate();
			await wireInventoryQueryInvalidate();
			await wireMarketQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => ({
			isTCR: false,
		})}
		toMutation={values => ({
			...values,
			withInventory: true,
		})}
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
		<FormItem field={"name"} hasTooltip required={!itemCount}/>
		<FormItem field={"vendorId"} required extra={<VendorCreateInline/>}>
			<VendorSelect/>
		</FormItem>
		<FormItem field={"draws"} hasTooltip>
			<TagSelect
				mode={"multiple"}
				translation={"common.draw"}
				applyFilter={{
					group: "draw",
				}}
			/>
		</FormItem>
		<FormItem field={"cost"} hasTooltip required>
			<InputNumber min={0} max={9999} style={{width: "100%"}}/>
		</FormItem>
		<SwitchItem field={"isTCR"} hasTooltip/>
		<Divider/>
		<Form.List name={"withFibers"}>
			{(fields, {add, remove}, {errors}) => <>
				{fields.map(({key, name, ...rest}) => <Form.Item
					key={key}
					noStyle
				>
					<Row gutter={16} align={"middle"}>
						<Col span={8}>
							<FormItem
								{...rest}
								field={[name, "count"]}
								labels={"shared.wire.create.fiber.count"}
								required
								extra={<></>}
							>
								<InputNumber
									min={1}
									max={6}
									step={1}
									style={{width: "100%"}}
								/>
							</FormItem>
						</Col>
						<Col span={14}>
							<FormItem
								{...rest}
								field={[name, "fiber"]}
								path={["withFibers", name, "fiber"]}
								labels={"shared.wire.create.fiber.fiberId"}
								required
								extra={<FiberCreateInline/>}
							>
								<FiberSelect/>
							</FormItem>
						</Col>
						<Col span={2}>
							<Button
								size={"large"}
								type={"link"}
								icon={<MinusCircleOutlined/>}
								onClick={() => {
									remove(name);
									setItemCount(count => count - 1);
								}}
							/>
						</Col>
					</Row>
				</Form.Item>)}
				<Form.Item>
					<Centered>
						<Button
							size={"large"}
							type={"text"}
							onClick={() => {
								add({
									count: 1,
								});
								setItemCount(count => count + 1);
							}}
							icon={<PlusOutlined/>}
						>
							{t("shared.wire.create.fiber.add.button")}
						</Button>
					</Centered>
					<Form.ErrorList errors={errors}/>
				</Form.Item>
			</>}
		</Form.List>
		<Divider/>
		<Centered>
			<Submit icon={<WireIcon/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};

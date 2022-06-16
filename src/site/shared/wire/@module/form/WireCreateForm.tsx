import {WireIcon} from "@/puff-smith/component/icon/WireIcon";
import {FiberSelect} from "@/puff-smith/site/shared/fiber/@module/form/FiberSelect";
import {TagSelect} from "@/puff-smith/site/shared/tag/@module/form/TagSelect";
import {VendorSelect} from "@/puff-smith/site/shared/vendor/@module/form/VendorSelect";
import {useWireInventoryQueryInvalidate} from "@/sdk/api/inventory/wire/query";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/wire/create";
import {useWireQueryInvalidate} from "@/sdk/api/wire/query";
import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import {Centered, FormItem, Submit, SwitchItem} from "@leight-core/client";
import {Button, Col, Divider, Form, InputNumber, message, Row} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IWireCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const WireCreateForm: FC<IWireCreateFormProps> = props => {
	const {t} = useTranslation();
	const wireQueryInvalidate = useWireQueryInvalidate();
	const wireInventoryQueryInvalidate = useWireInventoryQueryInvalidate();
	return <CreateDefaultForm
		translation={"shared.wire.create"}
		onSuccess={async () => {
			message.success(t("shared.wire.create.success"));
			await wireQueryInvalidate();
			await wireInventoryQueryInvalidate();
		}}
		toForm={() => ({
			isTCR: false,
		})}
		toMutation={values => ({
			...values,
			withInventory: true,
		})}
		{...props}
	>
		<FormItem field={"name"} hasTooltip/>
		<FormItem field={"vendorId"} required>
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
		<Form.List name={"fibers"}>
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
								field={[name, "fiberId"]}
								labels={"shared.wire.create.fiber.fiberId"}
								required
							>
								<FiberSelect/>
							</FormItem>
						</Col>
						<Col span={2}>
							<Button
								size={"large"}
								type={"link"}
								icon={<MinusCircleOutlined/>}
								onClick={() => remove(name)}
							/>
						</Col>
					</Row>
				</Form.Item>)}
				<Form.Item>
					<Centered>
						<Button
							size={"large"}
							type={"text"}
							onClick={() => add()}
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

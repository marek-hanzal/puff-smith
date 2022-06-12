import {WireIcon} from "@/puff-smith/component/icon/WireIcon";
import {VendorSelect} from "@/puff-smith/site/shared/vendor/@module/form/VendorSelect";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/wire/create";
import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import {Centered, FormItem, Submit, SwitchItem} from "@leight-core/client";
import {Button, Divider, Form, InputNumber} from "antd";
import {FC} from "react";

export interface IWireCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const WireCreateForm: FC<IWireCreateFormProps> = props => {
	return <CreateDefaultForm
		translation={"shared.wire.create"}
		toForm={() => ({
			isTCR: false,
		})}
		{...props}
	>
		<FormItem field={"name"} hasTooltip required/>
		<FormItem field={"vendorId"} required>
			<VendorSelect/>
		</FormItem>
		<FormItem field={"cost"} hasTooltip required>
			<InputNumber min={0} max={9999} style={{width: "100%"}}/>
		</FormItem>
		<SwitchItem field={"isTCR"} hasTooltip/>
		<Form.List name={"fibers"}>
			{(fields, {add, remove}, {errors}) => <>
				{fields.map((field, index) => <Form.Item
					label={index === 0 ? "Fiber biber ..." : ""}
					key={field.key}
				>
					<FormItem
						{...field}
						field={"blabla"}
						noStyle
					/>
					<MinusCircleOutlined
						onClick={() => remove(field.name)}
					/>
				</Form.Item>)}
				<Form.Item>
					<Button
						type="dashed"
						onClick={() => add()}
						style={{width: "60%"}}
						icon={<PlusOutlined/>}
					>
						Add field
					</Button>
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

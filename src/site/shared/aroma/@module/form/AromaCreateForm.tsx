import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {VendorSelect} from "@/puff-smith/site/shared/vendor/@module/form/VendorSelect";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/aroma/create";
import {Centered, FormItem, Submit} from "@leight-core/client";
import {InputNumber} from "antd";
import {FC} from "react";

export interface IAromaCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const AromaCreateForm: FC<IAromaCreateFormProps> = props => {
	return <CreateDefaultForm
		translation={"shared.aroma.create"}
		toForm={() => ({
			content: 12,
			volume: 60,
			steep: 14,
			vgpg: 100,
		})}
		{...props}
	>
		<FormItem field={"name"} required hasTooltip/>
		<FormItem field={"code"} hasTooltip/>
		<FormItem field={"cost"} hasTooltip>
			<InputNumber min={0} max={9999} style={{width: "100%"}}/>
		</FormItem>
		<FormItem field={"content"} hasTooltip required>
			<InputNumber min={0} max={1000} style={{width: "100%"}}/>
		</FormItem>
		<FormItem field={"volume"} hasTooltip required>
			<InputNumber min={0} max={1000} style={{width: "100%"}}/>
		</FormItem>
		<FormItem field={"vgpg"} hasTooltip>
			// use Select with Vg/PG
		</FormItem>
		<FormItem field={"steep"} hasTooltip required>
			<InputNumber min={0} max={1000} style={{width: "100%"}}/>
		</FormItem>
		<FormItem field={"vendorId"} required>
			<VendorSelect/>
		</FormItem>
		<Centered>
			<Submit icon={<LiquidIcon/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};

import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {VendorSelect} from "@/puff-smith/site/shared/vendor/@module/form/VendorSelect";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/aroma/create";
import {useAromaMarketCountQueryInvalidate, useAromaMarketQueryInvalidate} from "@/sdk/api/aroma/market/query";
import {useAromaCountQueryInvalidate, useAromaQueryInvalidate} from "@/sdk/api/aroma/query";
import {Centered, FormItem, Submit} from "@leight-core/client";
import {InputNumber, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IAromaCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const AromaCreateForm: FC<IAromaCreateFormProps> = props => {
	const {t} = useTranslation();
	const aromaQueryInvalidate = useAromaQueryInvalidate();
	const aromaMarketQueryInvalidate = useAromaMarketQueryInvalidate();
	const aromaCountQueryInvalidate = useAromaCountQueryInvalidate();
	const aromaMarketCountQueryInvalidate = useAromaMarketCountQueryInvalidate();
	return <CreateDefaultForm
		translation={"shared.aroma.create"}
		onSuccess={async ({response}) => {
			message.success(t("shared.aroma.create.success", response));
			await aromaQueryInvalidate();
			await aromaMarketQueryInvalidate();
			await aromaCountQueryInvalidate();
			await aromaMarketCountQueryInvalidate();
		}}
		toForm={() => ({
			content: 12,
			volume: 60,
			steep: 14,
			vgpg: 100,
		})}
		toMutation={({vgpg, ...values}) => ({
			...values,
			pg: vgpg,
			vg: 100 - vgpg,
		})}
		{...props}
	>
		<FormItem field={"name"} required hasTooltip/>
		<FormItem field={"code"} hasTooltip/>
		<FormItem field={"cost"} hasTooltip required>
			<InputNumber min={0} max={9999} style={{width: "100%"}}/>
		</FormItem>
		<FormItem field={"content"} hasTooltip required>
			<InputNumber min={0} max={1000} style={{width: "100%"}}/>
		</FormItem>
		<FormItem field={"volume"} hasTooltip required>
			<InputNumber min={0} max={1000} style={{width: "100%"}}/>
		</FormItem>
		<FormItem field={"vgpg"} hasTooltip required>
			<InputNumber min={0} max={100} style={{width: "100%"}}/>
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

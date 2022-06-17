import {BoosterIcon} from "@/puff-smith/component/icon/BoosterIcon";
import {VendorCreateInline} from "@/puff-smith/site/shared/vendor/@module/form/VendorCreateInline";
import {VendorSelect} from "@/puff-smith/site/shared/vendor/@module/form/VendorSelect";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/booster/create";
import {useBoosterCountQueryInvalidate, useBoosterQueryInvalidate} from "@/sdk/api/booster/query";
import {useBoosterMarketCountQueryInvalidate, useBoosterMarketQueryInvalidate} from "@/sdk/api/market/booster/query";
import {Centered, FormItem, Submit} from "@leight-core/client";
import {Divider, InputNumber, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IBoosterCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const BoosterCreateForm: FC<IBoosterCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const boosterQueryInvalidate = useBoosterQueryInvalidate();
	const boosterMarketQueryInvalidate = useBoosterMarketQueryInvalidate();
	const boosterCountQueryInvalidate = useBoosterCountQueryInvalidate();
	const boosterMarketCountQueryInvalidate = useBoosterMarketCountQueryInvalidate();
	return <CreateDefaultForm
		translation={"shared.booster.create"}
		onSuccess={async response => {
			message.success(t("shared.booster.create.success", response.response));
			await boosterQueryInvalidate();
			await boosterMarketQueryInvalidate();
			await boosterCountQueryInvalidate();
			await boosterMarketCountQueryInvalidate();
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

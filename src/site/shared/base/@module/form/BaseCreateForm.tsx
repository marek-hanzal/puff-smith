import {BaseIcon} from "@/puff-smith/component/icon/BaseIcon";
import {VendorCreateInline} from "@/puff-smith/site/shared/vendor/@module/form/VendorCreateInline";
import {VendorSelect} from "@/puff-smith/site/shared/vendor/@module/form/VendorSelect";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/base/create";
import {useBaseCountQueryInvalidate, useBaseQueryInvalidate} from "@/sdk/api/base/query";
import {useBaseMarketCountQueryInvalidate, useBaseMarketQueryInvalidate} from "@/sdk/api/market/base/query";
import {Centered, FormItem, Submit} from "@leight-core/client";
import {Divider, InputNumber, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IBaseCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const BaseCreateForm: FC<IBaseCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const baseQueryInvalidate = useBaseQueryInvalidate();
	const baseMarketQueryInvalidate = useBaseMarketQueryInvalidate();
	const baseCountQueryInvalidate = useBaseCountQueryInvalidate();
	const baseMarketCountQueryInvalidate = useBaseMarketCountQueryInvalidate();
	return <CreateDefaultForm
		translation={"shared.base.create"}
		onSuccess={async response => {
			message.success(t("shared.base.create.success", response.response));
			await baseQueryInvalidate();
			await baseMarketQueryInvalidate();
			await baseCountQueryInvalidate();
			await baseMarketCountQueryInvalidate();
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
		<Divider/>
		<Centered>
			<Submit icon={<BaseIcon/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};
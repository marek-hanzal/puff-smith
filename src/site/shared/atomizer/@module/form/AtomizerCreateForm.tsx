import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {TagSelect} from "@/puff-smith/site/shared/tag/@module/form/TagSelect";
import {VendorSelect} from "@/puff-smith/site/shared/vendor/@module/form/VendorSelect";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/atomizer/create";
import {useAtomizerCountQueryInvalidate, useAtomizerQueryInvalidate} from "@/sdk/api/atomizer/query";
import {useAtomizerMarketCountQueryInvalidate, useAtomizerMarketQueryInvalidate} from "@/sdk/api/market/atomizer/query";
import {Centered, FormItem, Submit, SwitchItem} from "@leight-core/client";
import {InputNumber, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IAtomizerCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const AtomizerCreateForm: FC<IAtomizerCreateFormProps> = props => {
	const {t} = useTranslation();
	const atomizerQueryInvalidate = useAtomizerQueryInvalidate();
	const atomizerMarketQueryInvalidate = useAtomizerMarketQueryInvalidate();
	const atomizerCountQueryInvalidate = useAtomizerCountQueryInvalidate();
	const atomizerMarketCountQueryInvalidate = useAtomizerMarketCountQueryInvalidate();
	return <CreateDefaultForm
		translation={"shared.atomizer.create"}
		onSuccess={async ({response}) => {
			message.success(t("shared.atomizer.create.success", response));
			await atomizerQueryInvalidate();
			await atomizerMarketQueryInvalidate();
			await atomizerCountQueryInvalidate();
			await atomizerMarketCountQueryInvalidate();
		}}
		toForm={() => ({
			squonk: false,
		})}
		{...props}
	>
		<FormItem field={"name"} required hasTooltip/>
		<FormItem field={"code"} hasTooltip/>
		<FormItem field={"vendorId"} required>
			<VendorSelect allowClear/>
		</FormItem>
		<FormItem field={"cost"} hasTooltip required>
			<InputNumber min={0} max={9999} style={{width: "100%"}}/>
		</FormItem>
		<FormItem field={"coilMin"} hasTooltip required>
			<InputNumber min={0} max={1} step={0.05} style={{width: "100%"}}/>
		</FormItem>
		<FormItem field={"coilMax"} hasTooltip required>
			<InputNumber min={0} max={1} step={0.05} style={{width: "100%"}}/>
		</FormItem>
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
		<SwitchItem field={"squonk"}/>
		<Centered>
			<Submit icon={<AtomizerIcon/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};

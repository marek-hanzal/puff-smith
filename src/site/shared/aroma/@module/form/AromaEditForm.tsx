import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {TagCreateInline} from "@/puff-smith/site/shared/tag/@module/form/TagCreateInline";
import {TagSelect} from "@/puff-smith/site/shared/tag/@module/form/TagSelect";
import {VendorCreateInline} from "@/puff-smith/site/shared/vendor/@module/form/VendorCreateInline";
import {VendorSelect} from "@/puff-smith/site/shared/vendor/@module/form/VendorSelect";
import {IPatchDefaultFormProps, PatchDefaultForm} from "@/sdk/api/aroma/patch";
import {useAromaCountQueryInvalidate, useAromaQueryInvalidate} from "@/sdk/api/aroma/query";
import {useAromaMarketCountQueryInvalidate, useAromaMarketQueryInvalidate} from "@/sdk/api/market/aroma/query";
import {Centered, FormItem, Submit, SwitchItem} from "@leight-core/client";
import {Col, Divider, InputNumber, message, Row} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IAromaEditFormProps extends Partial<IPatchDefaultFormProps> {
	aroma: IAroma;
}

export const AromaEditForm: FC<IAromaEditFormProps> = ({onSuccess, aroma, ...props}) => {
	const {t} = useTranslation();
	const aromaQueryInvalidate = useAromaQueryInvalidate();
	const aromaMarketQueryInvalidate = useAromaMarketQueryInvalidate();
	const aromaCountQueryInvalidate = useAromaCountQueryInvalidate();
	const aromaMarketCountQueryInvalidate = useAromaMarketCountQueryInvalidate();
	return <PatchDefaultForm
		translation={"shared.aroma.create"}
		onSuccess={async response => {
			message.success(t("shared.aroma.edit.success", {aroma: response.response}));
			await aromaQueryInvalidate();
			await aromaMarketQueryInvalidate();
			await aromaCountQueryInvalidate();
			await aromaMarketCountQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => ({
			...aroma,
			vgpg: aroma.pg,
			withMixtures: false,
		})}
		toMutation={({vgpg, ...values}) => ({
			id: aroma.id,
			...values,
			pg: vgpg,
			vg: 100 - vgpg,
		})}
		{...props}
	>
		<Row gutter={32}>
			<Col span={12}>
				<FormItem field={"name"} required hasTooltip/>
				<FormItem field={"code"} hasTooltip/>
				<FormItem field={"vendorId"} required extra={<VendorCreateInline/>}>
					<VendorSelect/>
				</FormItem>
				<FormItem field={"cost"} hasTooltip required>
					<InputNumber min={0} max={9999} style={{width: "100%"}}/>
				</FormItem>
				<FormItem
					field={"tasteIds"}
					hasTooltip
					extra={<TagCreateInline
						group={"taste"}
						title={"shared.tag.taste.create.title"}
						label={"shared.tag.taste.create.button"}
					/>}
				>
					<TagSelect
						translation={"common.taste"}
						mode={"multiple"}
						applyFilter={{
							group: "taste",
						}}
					/>
				</FormItem>
			</Col>
			<Col span={12}>
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
				<SwitchItem field={"withMixtures"} hasTooltip/>
			</Col>
		</Row>
		<Divider/>
		<Centered>
			<Submit icon={<AromaIcon/>} label={"edit"}/>
		</Centered>
	</PatchDefaultForm>;
};

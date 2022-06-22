import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {TagCreateInline} from "@/puff-smith/site/shared/tag/@module/form/TagCreateInline";
import {TagSelect} from "@/puff-smith/site/shared/tag/@module/form/TagSelect";
import {VendorCreateInline} from "@/puff-smith/site/shared/vendor/@module/form/VendorCreateInline";
import {VendorSelect} from "@/puff-smith/site/shared/vendor/@module/form/VendorSelect";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/aroma/create";
import {useAromaQueryInvalidate} from "@/sdk/api/aroma/query";
import {useAromaMarketQueryInvalidate} from "@/sdk/api/market/aroma/query";
import {useMixtureUpdateMutation} from "@/sdk/api/mixture/aroma/update";
import {Centered, FormItem, Submit} from "@leight-core/client";
import {Col, Divider, InputNumber, message, Row} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IAromaCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const AromaCreateForm: FC<IAromaCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const aromaQueryInvalidate = useAromaQueryInvalidate();
	const aromaMarketQueryInvalidate = useAromaMarketQueryInvalidate();
	const mixtureUpdateMutation = useMixtureUpdateMutation();
	return <CreateDefaultForm
		translation={"shared.aroma.create"}
		onSuccess={async response => {
			message.success(t("shared.aroma.create.success", response.response));
			await aromaQueryInvalidate();
			await aromaMarketQueryInvalidate();
			mixtureUpdateMutation.mutate({
				aromaId: response.response.id,
			});
			onSuccess?.(response);
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
			withInventory: true,
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
			</Col>
		</Row>
		<Divider/>
		<Centered>
			<Submit icon={<AromaIcon/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};

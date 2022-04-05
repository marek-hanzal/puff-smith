import {ContentInline, LiquidIcon, PgVgInline} from "@/puff-smith";
import {InventoryAromaSelect} from "@/puff-smith/site/shared/aroma/inventory";
import {InventoryBaseSelect} from "@/puff-smith/site/shared/base/inventory";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/liquid/create";
import {useQuickMixInfoQuery} from "@/sdk/api/liquid/quick-mix/info";
import {Centered, DatePicker, FormItem, Preview, Submit} from "@leight-core/client";
import {Col, Divider, Row} from "antd";
import moment from "moment";
import {FC, useState} from "react";

export interface ILiquidCreateQuickFormProps extends Partial<ICreateDefaultFormProps> {
}

export const LiquidCreateQuickForm: FC<ILiquidCreateQuickFormProps> = props => {
	const [aromaId, setAromaId] = useState<string>();
	const [baseId, setBaseId] = useState<string>();
	const quickMixInfoQuery = useQuickMixInfoQuery({aromaId, baseId});
	const {data: quickMixInfo} = quickMixInfoQuery;

	return <Row gutter={16}>
		<Col span={16}>
			<CreateDefaultForm
				translation={"lab.liquid"}
				toForm={() => ({
					mixed: moment(),
				})}
				{...props}
			>
				<FormItem hasTooltip field={"aromaId"} required>
					<InventoryAromaSelect onClear={() => setAromaId(undefined)} onSelect={({entity: {id}}) => setAromaId(id)}/>
				</FormItem>
				<FormItem hasTooltip field={"baseId"} required>
					<InventoryBaseSelect onClear={() => setBaseId(undefined)} onSelect={({entity: {id}}) => setBaseId(id)}/>
				</FormItem>
				<FormItem field={"mixed"}>
					<DatePicker disabledDate={date => date && date > moment().endOf("day")} style={{width: "100%"}}/>
				</FormItem>
				<Divider/>
				<Centered>
					<Submit icon={<LiquidIcon/>} label={"create"}/>
				</Centered>
			</CreateDefaultForm>
		</Col>
		<Col span={8}>
			<Preview>
				{{
					"lab.liquid.preview.pgvg": <PgVgInline pgvg={quickMixInfo?.pgvg}/>,
				}}
			</Preview>
			<Divider/>
			<Preview>
				{{
					"lab.liquid.preview.content": <ContentInline content={quickMixInfo?.aroma?.content}/>,
					"lab.liquid.preview.volume": <ContentInline content={quickMixInfo?.aroma?.volume}/>,
					"lab.liquid.preview.base.content": <ContentInline content={quickMixInfo?.base?.volume}/>,
					"lab.liquid.preview.aroma.pgvg": <PgVgInline pgvg={quickMixInfo?.aroma}/>,
					"lab.liquid.preview.base.pgvg": <PgVgInline pgvg={quickMixInfo?.base}/>,
				}}
			</Preview>
		</Col>
	</Row>;
};

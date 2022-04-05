import {Content2Inline, ContentInline, LiquidIcon, PgVgInline} from "@/puff-smith";
import {LiquidRatioHint} from "@/puff-smith/site/lab/liquid";
import {InventoryAromaSelect} from "@/puff-smith/site/shared/aroma/inventory";
import {InventoryBaseSelect} from "@/puff-smith/site/shared/base/inventory";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/liquid/create";
import {useQuickMixInfoQuery} from "@/sdk/api/liquid/quick-mix/info";
import {Centered, DatePicker, FormItem, Preview, Submit} from "@leight-core/client";
import {Col, Divider, Row, Space} from "antd";
import moment from "moment";
import {FC, useState} from "react";

export interface ILiquidCreateQuickFormProps extends Partial<ICreateDefaultFormProps> {
}

export const LiquidCreateQuickForm: FC<ILiquidCreateQuickFormProps> = props => {
	const [aromaId, setAromaId] = useState<string>();
	const [baseId, setBaseId] = useState<string>();
	const quickMixInfoQuery = useQuickMixInfoQuery({aromaId, baseId});
	const {data: quickMixInfo} = quickMixInfoQuery;

	return <>
		<LiquidRatioHint pgvg={quickMixInfo?.pgvg}/>
		<Row gutter={16}>
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
						"lab.liquid.preview.pgvg": <Space split={<Divider type={"vertical"}/>}>
							<PgVgInline pgvg={quickMixInfo?.pgvg?.ratio}/>
							<Content2Inline value1={quickMixInfo?.pgvg?.ml?.pg} value2={quickMixInfo?.pgvg?.ml?.vg}/>
						</Space>,
					}}
				</Preview>
				<Divider/>
				<Preview>
					{{
						"lab.liquid.preview.content": <ContentInline content={quickMixInfo?.aroma?.content}/>,
						"lab.liquid.preview.volume": <ContentInline content={quickMixInfo?.aroma?.volume}/>,
						"lab.liquid.preview.base.content": <ContentInline content={quickMixInfo?.base?.volume}/>,
						"lab.liquid.preview.aroma.pgvg": <Space split={<Divider type={"vertical"}/>}>
							<PgVgInline pgvg={quickMixInfo?.aroma}/>
							<Content2Inline value1={quickMixInfo?.aroma?.ml?.pg} value2={quickMixInfo?.aroma?.ml?.vg}/>
						</Space>,
						"lab.liquid.preview.base.pgvg": <Space split={<Divider type={"vertical"}/>}>
							<PgVgInline pgvg={quickMixInfo?.base}/>
							<Content2Inline value1={quickMixInfo?.base?.ml?.pg} value2={quickMixInfo?.base?.ml?.vg}/>
						</Space>,
					}}
				</Preview>
			</Col>
		</Row>
	</>;
};

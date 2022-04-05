import {Content2Inline, ContentInline, LiquidIcon, NicotineSlider, PgVgInline} from "@/puff-smith";
import {MixtureHint} from "@/puff-smith/site/lab/liquid";
import {InventoryAromaSelect} from "@/puff-smith/site/shared/aroma/inventory";
import {InventoryBaseSelect} from "@/puff-smith/site/shared/base/inventory";
import {InventoryBoosterSelect} from "@/puff-smith/site/shared/booster/inventory";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/liquid/create";
import {useQuickMixInfoQuery} from "@/sdk/api/liquid/quick-mix/info";
import {Centered, DatePicker, FormItem, Preview, Submit} from "@leight-core/client";
import {Col, Divider, Row, Space, Typography} from "antd";
import moment from "moment";
import {FC, useState} from "react";

export interface ILiquidCreateQuickFormProps extends Partial<ICreateDefaultFormProps> {
}

export const LiquidCreateQuickForm: FC<ILiquidCreateQuickFormProps> = props => {
	const [aromaId, setAromaId] = useState<string>();
	const [baseId, setBaseId] = useState<string>();
	const [boosterId, setBoosterId] = useState<string>();
	const [nicotine, setNicotine] = useState<number>(6);
	const quickMixInfoQuery = useQuickMixInfoQuery({aromaId, baseId, boosterId, nicotine});
	const {data: quickMixInfo} = quickMixInfoQuery;

	return <>
		<MixtureHint result={quickMixInfo?.result}/>
		<Row gutter={32}>
			<Col span={15}>
				<CreateDefaultForm
					translation={"lab.liquid"}
					toForm={() => ({
						mixed: moment(),
						nicotine: 6,
					})}
					{...props}
				>
					<FormItem hasTooltip field={"aromaId"} required>
						<InventoryAromaSelect onClear={() => setAromaId(undefined)} onSelect={({entity: {id}}) => setAromaId(id)}/>
					</FormItem>
					<FormItem hasTooltip field={"baseId"}>
						<InventoryBaseSelect onClear={() => setBaseId(undefined)} onSelect={({entity: {id}}) => setBaseId(id)}/>
					</FormItem>
					<FormItem hasTooltip field={"boosterId"}>
						<InventoryBoosterSelect onClear={() => setBoosterId(undefined)} onSelect={({entity: {id}}) => setBoosterId(id)}/>
					</FormItem>
					<FormItem hasTooltip field={"nicotine"}>
						<NicotineSlider onChange={setNicotine}/>
					</FormItem>
					<Divider/>
					<FormItem field={"mixed"}>
						<DatePicker disabledDate={date => date && date > moment().endOf("day")} style={{width: "100%"}}/>
					</FormItem>
					<Divider/>
					<Centered>
						<Submit disabled={!!quickMixInfo?.result?.error || false} icon={<LiquidIcon/>} label={"create"}/>
					</Centered>
				</CreateDefaultForm>
			</Col>
			<Col span={9}>
				<Preview hideEmpty>
					{{
						"lab.liquid.preview.pgvg": <Space split={<Divider type={"vertical"}/>}>
							<PgVgInline pgvg={quickMixInfo?.result?.ratio}/>
							<Content2Inline value1={quickMixInfo?.result?.ml?.vg} value2={quickMixInfo?.result?.ml?.pg}/>
						</Space>,
						"lab.liquid.preview.booster.content": quickMixInfo?.booster && <Space split={<Divider type={"vertical"}/>}>
							<ContentInline content={quickMixInfo.booster?.volume}/>
							<Typography.Text>{quickMixInfo.booster?.count}x</Typography.Text>
						</Space>,
						"lab.liquid.preview.mix.volume": <Space>
							<ContentInline content={quickMixInfo?.result?.volume}/>
							(<ContentInline tooltip={"lab.liquid.preview.mix.volume.hint"} content={(quickMixInfo?.aroma?.volume || 0) - (quickMixInfo?.result?.volume || 0)}/>)
						</Space>,
					}}
				</Preview>
				<Divider/>
				<Preview hideEmpty>
					{{
						"lab.liquid.preview.content": <ContentInline content={quickMixInfo?.aroma?.content}/>,
						"lab.liquid.preview.volume": <ContentInline content={quickMixInfo?.aroma?.volume}/>,
						"lab.liquid.preview.base.content": quickMixInfo?.base?.volume && <ContentInline content={quickMixInfo?.base?.volume}/>,
						"lab.liquid.preview.aroma.pgvg": <Space split={<Divider type={"vertical"}/>}>
							<PgVgInline pgvg={quickMixInfo?.aroma}/>
							<Content2Inline value1={quickMixInfo?.aroma?.ml?.vg} value2={quickMixInfo?.aroma?.ml?.pg}/>
						</Space>,
						"lab.liquid.preview.booster.pgvg": quickMixInfo?.booster && <Space split={<Divider type={"vertical"}/>}>
							<PgVgInline pgvg={quickMixInfo.booster}/>
							<Content2Inline value1={quickMixInfo.booster?.ml?.vg} value2={quickMixInfo.booster?.ml?.pg}/>
						</Space>,
						"lab.liquid.preview.base.pgvg": quickMixInfo?.base && <Space split={<Divider type={"vertical"}/>}>
							<PgVgInline pgvg={quickMixInfo?.base}/>
							<Content2Inline value1={quickMixInfo?.base?.ml?.vg} value2={quickMixInfo?.base?.ml?.pg}/>
						</Space>,
					}}
				</Preview>
			</Col>
		</Row>
	</>;
};

import {Content2Inline, ContentInline, LiquidIcon, NicotineSlider, PgVgInline} from "@/puff-smith";
import {ILiquidQuickMixInfoRequest} from "@/puff-smith/service/liquid";
import {MixtureHint} from "@/puff-smith/site/lab/liquid";
import {InventoryAromaSelect} from "@/puff-smith/site/shared/aroma/inventory";
import {InventoryBaseSelect} from "@/puff-smith/site/shared/base/inventory";
import {InventoryBoosterSelect} from "@/puff-smith/site/shared/booster/inventory";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/liquid/create";
import {useQuickMixInfoQuery} from "@/sdk/api/liquid/quick-mix/info";
import {IssuesCloseOutlined} from "@ant-design/icons";
import {ButtonBar, Centered, DatePicker, FormItem, Preview, Submit} from "@leight-core/client";
import {Button, Col, Divider, Row, Space, Typography} from "antd";
import moment from "moment";
import {FC, useState} from "react";
import {useTranslation} from "react-i18next";

export interface ILiquidCreateQuickFormProps extends Partial<ICreateDefaultFormProps> {
}

export const LiquidCreateQuickForm: FC<ILiquidCreateQuickFormProps> = props => {
	const {t} = useTranslation();
	const [aromaId, setAromaId] = useState<string>();
	const [baseId, setBaseId] = useState<string>();
	const [boosterId, setBoosterId] = useState<string>();
	const [nicotine, setNicotine] = useState<number>(0);
	const [request, setRequest] = useState<ILiquidQuickMixInfoRequest>();
	const [check, setCheck] = useState(true);

	const quickMixInfoQuery = useQuickMixInfoQuery(request, undefined, {
		keepPreviousData: true,
		onSuccess: () => setCheck(false),
	});
	const {data: quickMixInfo} = quickMixInfoQuery;

	return <>
		<MixtureHint result={quickMixInfo?.result}/>
		<Row gutter={32}>
			<Col span={15}>
				<CreateDefaultForm
					translation={"lab.liquid"}
					toForm={() => ({
						mixed: moment(),
						nicotine,
					})}
					onValuesChange={() => setCheck(true)}
					{...props}
				>
					<FormItem hasTooltip field={"aromaId"} required>
						<InventoryAromaSelect onClear={() => setAromaId(undefined)} onSelect={({entity: {id}}) => setAromaId(id)}/>
					</FormItem>
					<Divider/>
					<FormItem hasTooltip field={"nicotine"}>
						<NicotineSlider onChange={setNicotine}/>
					</FormItem>
					{nicotine > 0 && <FormItem hasTooltip field={"boosterId"} required>
						<InventoryBoosterSelect onClear={() => setBoosterId(undefined)} onSelect={({entity: {id}}) => setBoosterId(id)}/>
					</FormItem>}
					<FormItem hasTooltip field={"baseId"} required={!nicotine}>
						<InventoryBaseSelect onClear={() => setBaseId(undefined)} onSelect={({entity: {id}}) => setBaseId(id)}/>
					</FormItem>
					<Divider/>
					<FormItem field={"mixed"}>
						<DatePicker disabledDate={date => date && date > moment().endOf("day")} style={{width: "100%"}}/>
					</FormItem>
					<Divider/>
					<Centered>
						<ButtonBar align={"baseline"}>
							{check && <Button
								type={"primary"}
								ghost
								icon={<IssuesCloseOutlined/>}
								disabled={!aromaId}
								onClick={() => setRequest({aromaId, baseId, boosterId, nicotine})}
							>{t("lab.liquid.mixture.refresh")}</Button>}
							{quickMixInfo?.result && !quickMixInfo?.result?.error && !check && <Submit
								icon={<LiquidIcon/>}
								label={"create"}
							/>}
						</ButtonBar>
					</Centered>
				</CreateDefaultForm>
			</Col>
			<Col span={9}>
				<Preview hideEmpty>
					{{
						"lab.liquid.preview.pgvg": quickMixInfo?.result && <Space split={<Divider type={"vertical"}/>}>
							<PgVgInline pgvg={quickMixInfo?.result?.ratio}/>
							<Content2Inline value1={quickMixInfo?.result?.ml?.vg} value2={quickMixInfo?.result?.ml?.pg}/>
						</Space>,
						"lab.liquid.preview.booster.content": quickMixInfo?.booster && <Space split={<Divider type={"vertical"}/>}>
							<ContentInline content={quickMixInfo.booster?.volume}/>
							<Typography.Text>{quickMixInfo.booster?.count}x</Typography.Text>
						</Space>,
						"lab.liquid.preview.base.content": quickMixInfo?.base?.volume && <ContentInline content={quickMixInfo?.base?.volume}/>,
						"lab.liquid.preview.mix.volume": quickMixInfo?.result && <Space>
							<ContentInline content={quickMixInfo?.result?.volume}/>
							{!!quickMixInfo?.result?.content && <>(<ContentInline tooltip={"lab.liquid.preview.mix.volume.hint"} content={quickMixInfo?.result?.content}/>)</>}
						</Space>,
					}}
				</Preview>
				<Divider/>
				<Preview hideEmpty>
					{{
						"lab.liquid.preview.content": <ContentInline content={quickMixInfo?.aroma?.content}/>,
						"lab.liquid.preview.volume": <ContentInline content={quickMixInfo?.aroma?.volume}/>,
						"lab.liquid.preview.aroma.pgvg": quickMixInfo?.aroma && <Space split={<Divider type={"vertical"}/>}>
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

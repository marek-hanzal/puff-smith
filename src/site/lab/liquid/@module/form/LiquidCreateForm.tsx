import {Content2Inline, ContentInline, LiquidIcon, NicotineInline, NicotineSelect, PgVgInline} from "@/puff-smith";
import {ILiquidQuickMixInfoRequest} from "@/puff-smith/service/liquid";
import {MixtureHint} from "@/puff-smith/site/lab/liquid";
import {InventoryAromaSelect} from "@/puff-smith/site/shared/aroma/inventory";
import {InventoryBaseSelect} from "@/puff-smith/site/shared/base/inventory";
import {InventoryBoosterSelect} from "@/puff-smith/site/shared/booster/inventory";
import {useLiquidsQueryInvalidate} from "@/sdk/api/liquid/query";
import {CreateQuickMixDefaultForm, ICreateQuickMixDefaultFormProps} from "@/sdk/api/liquid/quick-mix/create";
import {useQuickMixInfoQuery} from "@/sdk/api/liquid/quick-mix/info";
import {usePuffiesQueryInvalidate} from "@/sdk/api/user/puffies";
import {IssuesCloseOutlined} from "@ant-design/icons";
import {ButtonBar, Centered, DatePicker, FormItem, Preview, Submit} from "@leight-core/client";
import {Col, Divider, message, Row, Space, Typography} from "antd";
import moment from "moment";
import {FC, useState} from "react";
import {useTranslation} from "react-i18next";

export interface ILiquidCreateFormProps extends Partial<ICreateQuickMixDefaultFormProps> {
}

export const LiquidCreateForm: FC<ILiquidCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const liquidsQueryInvalidate = useLiquidsQueryInvalidate();
	const puffiesQueryInvalidate = usePuffiesQueryInvalidate();
	const [aromaId, setAromaId] = useState<string>();
	const [baseId, setBaseId] = useState<string>();
	const [boosterId, setBoosterId] = useState<string>();
	const [nicotine, setNicotine] = useState<number>(0);
	const [request, setRequest] = useState<ILiquidQuickMixInfoRequest>();
	const [check, setCheck] = useState(true);

	const toRequest = (request?: ILiquidQuickMixInfoRequest) => setRequest(request || {aromaId, baseId, boosterId, nicotine});

	const quickMixInfoQuery = useQuickMixInfoQuery(request, undefined, {
		keepPreviousData: true,
		onSuccess: () => setCheck(false),
	});
	const {data: quickMixInfo} = quickMixInfoQuery;

	return <>
		<MixtureHint result={quickMixInfo?.result}/>
		<Row gutter={32}>
			<Col span={15}>
				<CreateQuickMixDefaultForm
					onSuccess={async response => {
						await liquidsQueryInvalidate();
						message.success(t("lab.liquid.quick-mix.success", {
							data: {
								name: response.response.name,
								amount: -1 * response.response.transaction.amount,
							}
						}));
						await puffiesQueryInvalidate();
						onSuccess?.(response);
					}}
					translation={"lab.liquid"}
					toForm={() => ({
						mixed: moment(),
						nicotine,
					})}
					onChange={({values: {aromaId, baseId, boosterId}}) => {
						setCheck(true);
						setAromaId(aromaId);
						setBoosterId(boosterId);
						setBaseId(baseId);
						console.log("Check true");
					}}
					{...props}
				>
					<FormItem hasTooltip field={"aromaId"} required>
						<InventoryAromaSelect/>
					</FormItem>
					<Divider/>
					<FormItem hasTooltip field={"nicotine"}>
						<NicotineSelect onChange={setNicotine}/>
					</FormItem>
					{nicotine > 0 && <FormItem hasTooltip field={"boosterId"} required>
						<InventoryBoosterSelect/>
					</FormItem>}
					<FormItem hasTooltip field={"baseId"} required={!nicotine}>
						<InventoryBaseSelect/>
					</FormItem>
					<Divider/>
					<FormItem field={"mixed"}>
						<DatePicker disabledDate={date => date && date > moment().endOf("day")} style={{width: "100%"}}/>
					</FormItem>
					<Divider/>
					<Centered>
						<ButtonBar align={"baseline"}>
							{check && <Submit
								type={"primary"}
								ghost
								icon={<IssuesCloseOutlined/>}
								label={"mixture.refresh"}
								onClick={e => {
									e.preventDefault();
									toRequest();
									console.log("Refresh");
								}}
							/>}
							{!check && <Submit
								icon={<LiquidIcon/>}
								disabled={!(quickMixInfo?.result && !quickMixInfo?.result?.error)}
								label={"create"}
							/>}
						</ButtonBar>
					</Centered>
				</CreateQuickMixDefaultForm>
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
							<NicotineInline nicotine={quickMixInfo.result?.nicotine}/>
						</Space>,
						"lab.liquid.preview.base.content": quickMixInfo?.base?.volume && <ContentInline content={quickMixInfo?.base?.volume}/>,
					}}
				</Preview>
				<Divider/>
				<Preview hideEmpty>
					{{
						"lab.liquid.preview.content": <ContentInline content={quickMixInfo?.aroma?.content}/>,
						"lab.liquid.preview.volume": <ContentInline content={quickMixInfo?.aroma?.volume}/>,
						"lab.liquid.preview.mix.volume": quickMixInfo?.result && <Space>
							<ContentInline content={quickMixInfo?.result?.volume}/>
							{!!quickMixInfo?.result?.content && <>(<ContentInline tooltip={"lab.liquid.preview.mix.volume.hint"} content={quickMixInfo?.result?.content}/>)</>}
						</Space>,
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

import {Content2Inline, ContentInline, LiquidIcon, NicotineInline, PgVgInline} from "@/puff-smith";
import {ILiquidQuickMixInfo} from "@/puff-smith/service/liquid";
import {MixtureHint} from "@/puff-smith/site/lab/liquid";
import {Preview, Template} from "@leight-core/client";
import {Divider, Space, Tabs, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IQuickMixInfoProps {
	quickMixInfo?: ILiquidQuickMixInfo;
}

export const QuickMixInfo: FC<IQuickMixInfoProps> = ({quickMixInfo}) => {
	const {t} = useTranslation();
	return quickMixInfo?.result ? <Tabs>
		<Tabs.TabPane key={"preview"} tab={t("lab.liquid.quick-mix.preview.tab")}>
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
			<MixtureHint result={quickMixInfo?.result}/>
		</Tabs.TabPane>
		<Tabs.TabPane key={"details"} tab={t("lab.liquid.quick-mix.details.tab")}>
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
		</Tabs.TabPane>
	</Tabs> : <Template
		icon={<LiquidIcon/>}
		label={"lab.liquid.quick-info"}
	/>;
};

import {PgVgInline} from "@/puff-smith/component/inline/PgVgInline";
import {Price} from "@/puff-smith/component/Price";
import {Tags} from "@/puff-smith/component/Tags";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {AromaContentInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaContentInline";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {Preview, Template} from "@leight-core/client";
import {Col, Divider, Row} from "antd";
import dayjs from "dayjs";
import {FC} from "react";

export interface IAromaViewProps {
	aroma: IAroma;
}

export const AromaView: FC<IAromaViewProps> = ({aroma}) => {
	return <Template
		title={aroma.name}
		subTitle={aroma.vendor.name}
		extra={<Divider/>}
	>
		<Row gutter={16}>
			<Col span={12}>
				<Preview translation={"market.aroma.view"}>
					{{
						name: <AromaNameInline aroma={aroma}/>,
						pgvg: <PgVgInline pgvg={aroma}/>,
						content: <AromaContentInline aroma={aroma}/>,
					}}
				</Preview>
			</Col>
			<Col span={12}>
				<Preview translation={"market.aroma.view"}>
					{{
						steep: aroma.steep ? dayjs.duration(aroma.steep, "days").humanize() : undefined,
						cost: <Price withIcon withColor price={aroma.cost}/>,
						tastes: aroma.tastes ? <Tags tags={aroma.tastes} translation={"common.taste"}/> : undefined,
					}}
				</Preview>
			</Col>
		</Row>
	</Template>;
};

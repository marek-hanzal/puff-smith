import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {Tags} from "@/puff-smith/component/Tags";
import {ICotton} from "@/puff-smith/service/cotton/interface";
import {CottonNameInline} from "@/puff-smith/site/shared/cotton/@module/inline/CottonNameInline";
import {Preview} from "@leight-core/client";
import {Col, Row} from "antd";
import {FC} from "react";

export interface ICottonViewProps {
	cotton: ICotton;
}

export const CottonView: FC<ICottonViewProps> = ({cotton}) => {
	return <Row gutter={32}>
		<Col span={24}>
			<Preview translation={"shared.cotton.view"}>
				{{
					name: <CottonNameInline cotton={cotton}/>,
					code: <CodeInline code={cotton}/>,
					draws: <Tags tags={cotton.draws} translation={"common.draw"}/>,
				}}
			</Preview>
		</Col>
	</Row>;
};

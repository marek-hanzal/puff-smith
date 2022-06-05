import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {RangeInline} from "@/puff-smith/component/inline/RangeInline";
import {Tags} from "@/puff-smith/component/Tags";
import {IAtomizer} from "@/puff-smith/service/atomizer/interface";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {Preview} from "@leight-core/client";
import {Col, Row} from "antd";
import {FC} from "react";

export interface IAtomizerViewProps {
	atomizer: IAtomizer;
}

export const AtomizerView: FC<IAtomizerViewProps> = ({atomizer}) => {
	return <Row gutter={32}>
		<Col span={24}>
			<Preview translation={"shared.atomizer.view"}>
				{{
					name: <AtomizerNameInline atomizer={atomizer}/>,
					code: <CodeInline code={atomizer}/>,
					draws: <Tags tags={atomizer.draws} translation={"common.draw"}/>,
					coilSize: <RangeInline from={atomizer.coilMin} to={atomizer.coilMax}/>
				}}
			</Preview>
		</Col>
	</Row>;
};

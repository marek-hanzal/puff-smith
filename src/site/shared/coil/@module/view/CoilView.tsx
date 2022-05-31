import {CoilSize} from "@/puff-smith/component/inline/CoilSize";
import {CoilWraps} from "@/puff-smith/component/inline/CoilWraps";
import {Tags} from "@/puff-smith/component/Tags";
import {ICoil} from "@/puff-smith/service/coil/interface";
import {WireFiberInline} from "@/puff-smith/site/shared/wire/@module/inline/WireFiberInline";
import {WireNameInline} from "@/puff-smith/site/shared/wire/@module/inline/WireNameInline";
import {Preview} from "@leight-core/client";
import {Col, Row} from "antd";
import {FC} from "react";

export interface ICoilViewProps {
	coil: ICoil;
}

export const CoilView: FC<ICoilViewProps> = ({coil}) => {
	return <Row gutter={32}>
		<Col span={12}>
			<Preview translation={"shared.coil.view"}>
				{{
					name: coil.name,
					size: <CoilSize size={coil.size}/>,
					wraps: <CoilWraps wraps={coil.wraps}/>,
				}}
			</Preview>
		</Col>
		<Col span={12}>
			<Preview translation={"shared.coil.view"}>
				{{
					draws: <Tags tags={coil.draws} translation={"common.draw"}/>,
					wire: <WireNameInline wire={coil.wire}/>,
					fibers: <WireFiberInline wire={coil.wire}/>,
				}}
			</Preview>
		</Col>
	</Row>;
};

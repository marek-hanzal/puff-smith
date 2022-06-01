import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {CoilSize} from "@/puff-smith/component/inline/CoilSize";
import {CoilWraps} from "@/puff-smith/component/inline/CoilWraps";
import {LocalDate} from "@/puff-smith/component/inline/LocalDate";
import {Ohm} from "@/puff-smith/component/inline/Ohm";
import {Tags} from "@/puff-smith/component/Tags";
import {IBuild} from "@/puff-smith/service/build/interface";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {CottonNameInline} from "@/puff-smith/site/shared/cotton/@module/inline/CottonNameInline";
import {WireFiberInline} from "@/puff-smith/site/shared/wire/@module/inline/WireFiberInline";
import {WireNameInline} from "@/puff-smith/site/shared/wire/@module/inline/WireNameInline";
import {CommentOutlined} from "@ant-design/icons";
import {BoolInline, Preview, TabInline} from "@leight-core/client";
import {Col, Row, Tabs} from "antd";
import {FC} from "react";

export interface IBuildViewProps {
	build: IBuild;
}

export const BuildView: FC<IBuildViewProps> = ({build}) => {
	return <Tabs size={"large"}>
		<Tabs.TabPane key={"info"} tab={<TabInline icon={<BuildIcon/>} title={"lab.build.info.tab"}/>}>
			<Row gutter={32}>
				<Col span={8}>
					<Preview translation={"lab.build.view"}>
						{{
							atomizer: <AtomizerNameInline atomizer={build.atomizer}/>,
							code: <CodeInline code={build}/>,
							ohm: <Ohm ohm={build.ohm}/>,
							created: <LocalDate date={build.created}/>,
							active: <BoolInline bool={build.active}/>,
						}}
					</Preview>
				</Col>
				<Col span={8}>
					<Preview translation={"lab.build.view"}>
						{{
							cotton: <CottonNameInline cotton={build.cotton}/>,
							wire: <WireNameInline wire={build.coil.wire}/>,
							fiber: <WireFiberInline wire={build.coil.wire}/>,
							wraps: <CoilWraps wraps={build.coil.wraps}/>,
							size: <CoilSize size={build.coil.size}/>,
						}}
					</Preview>
				</Col>
				<Col span={8}>
					<Preview translation={"lab.build.view"}>
						{{
							"atomizer.draw": <Tags tags={build.atomizer.draws} translation={"common.draw"}/>,
							"cotton.draw": <Tags tags={build.cotton.draws} translation={"common.draw"}/>,
							"coil.draw": <Tags tags={build.coil.draws} translation={"common.draw"}/>,
						}}
					</Preview>
				</Col>
			</Row>
		</Tabs.TabPane>
		<Tabs.TabPane key={"comments"} tab={<TabInline icon={<CommentOutlined/>} title={"lab.build.comments.tab"}/>}>
		</Tabs.TabPane>
	</Tabs>;
};

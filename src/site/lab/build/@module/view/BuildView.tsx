import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {CoilSize} from "@/puff-smith/component/inline/CoilSize";
import {CoilWraps} from "@/puff-smith/component/inline/CoilWraps";
import {LocalDate} from "@/puff-smith/component/inline/LocalDate";
import {Ohm} from "@/puff-smith/component/inline/Ohm";
import {IBuild} from "@/puff-smith/service/build/interface";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {CottonNameInline} from "@/puff-smith/site/shared/cotton/@module/inline/CottonNameInline";
import {WireFiberInline} from "@/puff-smith/site/shared/wire/@module/inline/WireFiberInline";
import {WireNameInline} from "@/puff-smith/site/shared/wire/@module/inline/WireNameInline";
import {BoolInline, Preview} from "@leight-core/client";
import {Col, Row, Tabs} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IBuildViewProps {
	build: IBuild;
}

export const BuildView: FC<IBuildViewProps> = ({build}) => {
	const {t} = useTranslation();
	return <Tabs>
		<Tabs.TabPane key={"info"} tab={t("lab.build.info.tab")}>
			<Row gutter={32}>
				<Col span={12}>
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
				<Col span={12}>
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
			</Row>
		</Tabs.TabPane>
		<Tabs.TabPane key={"comments"} tab={t("lab.build.comments.tab")}>
		</Tabs.TabPane>
	</Tabs>;
};

import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {TransComponents} from "@/puff-smith/component/Trans";
import {BuildSource} from "@/puff-smith/service/build/BuildSource";
import {IBuildFetch} from "@/puff-smith/service/build/interface";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildIndexMenu} from "@/puff-smith/site/lab/build/@module/menu/BuildIndexMenu";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {FireOutlined} from "@ant-design/icons";
import {TabInline, Template} from "@leight-core/client";
import {Tabs} from "antd";

export default withLabLayout(function Liquid({build}: IBuildFetch) {
	return <LabPage
		title={"lab.build.liquid"}
		values={{build}}
		components={TransComponents}
		onBack={navigate => navigate("/lab/build")}
		menuSelection={["/lab/build", "/lab/build/[buildId]/liquid"]}
		icon={<LiquidIcon/>}
		headerProps={{
			footer: <BuildIndexMenu build={build}/>,
		}}
	>
		<Template
			title={<AtomizerNameInline atomizer={build.atomizer}/>}
		>
			<Tabs size={"large"}>
				<Tabs.TabPane key={"recommended"} tab={<TabInline icon={<FireOutlined/>} title={"lab.build.liquid.recommended.tab"}/>}>

				</Tabs.TabPane>
				<Tabs.TabPane key={"liquids"} tab={<TabInline icon={<LiquidIcon/>} title={"lab.build.liquid.liquids.tab"}/>}>

				</Tabs.TabPane>
			</Tabs>
		</Template>
	</LabPage>;
});

export const getServerSideProps = BuildSource().withFetch("build", "buildId");

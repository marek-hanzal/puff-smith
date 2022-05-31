import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {TransComponents} from "@/puff-smith/component/Trans";
import {BuildSource} from "@/puff-smith/service/build/BuildSource";
import {IBuildFetch} from "@/puff-smith/service/build/interface";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildIndexMenu} from "@/puff-smith/site/lab/build/@module/menu/BuildIndexMenu";
import {SmileOutlined} from "@ant-design/icons";
import {Template} from "@leight-core/client";

export default withLabLayout(function Cotton({build}: IBuildFetch) {
	return <LabPage
		title={"lab.build.cotton"}
		tabTitle={"lab.build.cotton.title.tab"}
		values={{build}}
		components={TransComponents}
		onBack={navigate => navigate("/lab/build")}
		menuSelection={["/lab/build", "/lab/build/[buildId]/cotton"]}
		icon={<CottonIcon/>}
		headerProps={{
			footer: <BuildIndexMenu build={build}/>,
		}}
	>
		<Template
			icon={<SmileOutlined/>}
			title={"Not Yet!"}
			subTitle={"To be continue..."}
		/>
	</LabPage>;
});

export const getServerSideProps = BuildSource().withFetch("build", "buildId");

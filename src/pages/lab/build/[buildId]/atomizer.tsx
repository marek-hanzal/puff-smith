import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {TransComponents} from "@/puff-smith/component/Trans";
import {BuildSource} from "@/puff-smith/service/build/BuildSource";
import {IBuildFetch} from "@/puff-smith/service/build/interface";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildIndexMenu} from "@/puff-smith/site/lab/build/@module/menu/BuildIndexMenu";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {AtomizerView} from "@/puff-smith/site/shared/atomizer/@module/view/AtomizerView";
import {Template} from "@leight-core/client";

export default withLabLayout(function Atomizer({build}: IBuildFetch) {
	return <LabPage
		title={"lab.build.atomizer"}
		values={{build}}
		components={TransComponents}
		onBack={navigate => navigate("/lab/build")}
		menuSelection={["/lab/build", "/lab/build/[buildId]/atomizer"]}
		icon={<AtomizerIcon/>}
		headerProps={{
			footer: <BuildIndexMenu build={build}/>,
		}}
	>
		<Template
			title={<AtomizerNameInline atomizer={build.atomizer}/>}
			span={22}
		>
			<AtomizerView atomizer={build.atomizer}/>
		</Template>
	</LabPage>;
});

export const getServerSideProps = BuildSource().withFetch("build", "buildId");

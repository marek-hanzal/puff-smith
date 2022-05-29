import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {BuildSource} from "@/puff-smith/service/build/BuildSource";
import {IBuildFetch} from "@/puff-smith/service/build/interface";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildIndexMenu, BuildIndexMenuWidth} from "@/puff-smith/site/lab/build/@module/menu/BuildIndexMenu";

export default withLabLayout(function Index({build}: IBuildFetch) {
	return <LabPage
		title={"lab.build.build"}
		menuSelection={["/lab/build", "/lab/build/[buildId]"]}
		onBack={navigate => navigate("/lab/build")}
		icon={<BuildIcon/>}
		extra={<BuildIndexMenu build={build}/>}
		extraSize={BuildIndexMenuWidth}
	>
		build here, hehehe
	</LabPage>;
});


export const getServerSideProps = BuildSource().withFetch("build", "buildId");

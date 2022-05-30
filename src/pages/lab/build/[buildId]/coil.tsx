import {CoilIcon} from "@/puff-smith/component/icon/CoilIcon";
import {TransComponents} from "@/puff-smith/component/Trans";
import {BuildSource} from "@/puff-smith/service/build/BuildSource";
import {IBuildFetch} from "@/puff-smith/service/build/interface";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildIndexMenu} from "@/puff-smith/site/lab/build/@module/menu/BuildIndexMenu";
import {SmileOutlined} from "@ant-design/icons";
import {Template} from "@leight-core/client";

export default withLabLayout(function Coil({build}: IBuildFetch) {
	return <LabPage
		title={"lab.build.coil"}
		tabTitle={"lab.build.coil.title.tab"}
		values={{build}}
		components={TransComponents}
		onBack={navigate => navigate("/lab/build")}
		menuSelection={["/lab/build", "/lab/build/[buildId]/coil"]}
		icon={<CoilIcon/>}
		headerPostfix={<BuildIndexMenu build={build}/>}
	>
		<Template
			icon={<SmileOutlined/>}
			title={"Not Yet!"}
			subTitle={"To be continue..."}
		/>
	</LabPage>;
});

export const getServerSideProps = BuildSource().withFetch("build", "buildId");

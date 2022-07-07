import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {TransComponents} from "@/puff-smith/component/Trans";
import {BuildSource} from "@/puff-smith/service/build/BuildSource";
import {IBuildFetch} from "@/puff-smith/service/build/interface";
import {BrowserLabPage} from "@/puff-smith/site/lab/@module/component/BrowserLabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildNameInline} from "@/puff-smith/site/lab/build/@module/inline/BuildNameInline";
import {BuildIndexMenu} from "@/puff-smith/site/lab/build/@module/menu/BuildIndexMenu";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {AtomizerView} from "@/puff-smith/site/shared/atomizer/@module/view/AtomizerView";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, Template} from "@leight-core/client";
import {Divider} from "antd";

export default withLabLayout(function Atomizer({build}: IBuildFetch) {
	return <BrowserLabPage
		title={"lab.build.atomizer"}
		values={{build}}
		components={TransComponents}
		onBack={navigate => navigate("/lab/build")}
		menuSelection={["/lab/build", "/lab/build/[buildId]/atomizer"]}
		icon={<AtomizerIcon/>}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/lab"}
				icon={<LabIcon/>}
			/>
			<BreadcrumbButton
				href={"/lab/build"}
				label={"lab.build.label"}
			/>
			<BreadcrumbButton
				href={"/lab/build/[buildId]"}
				query={{
					buildId: build.id,
				}}
				label={<BuildNameInline build={build}/>}
			/>
			<BreadcrumbIcon
				icon={<AtomizerIcon/>}
				label={"lab.build.atomizer.title"}
			/>
		</Breadcrumbs>}
		footer={<BuildIndexMenu build={build}/>}
	>
		<Template
			title={<AtomizerNameInline atomizer={build.atomizer}/>}
			span={22}
			extra={<Divider/>}
		>
			<AtomizerView atomizer={build.atomizer}/>
		</Template>
	</BrowserLabPage>;
});

export const getServerSideProps = BuildSource().withFetch("build", "buildId");

import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {BuildSource} from "@/puff-smith/service/build/BuildSource";
import {IBuildFetch} from "@/puff-smith/service/build/interface";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildDisableButton} from "@/puff-smith/site/lab/build/@module/button/BuildDisableButton";
import {BuildRatingButton} from "@/puff-smith/site/lab/build/@module/button/BuildRatingButton";
import {BuildNameInline} from "@/puff-smith/site/lab/build/@module/inline/BuildNameInline";
import {BuildIndexMenu} from "@/puff-smith/site/lab/build/@module/menu/BuildIndexMenu";
import {BuildView} from "@/puff-smith/site/lab/build/@module/view/BuildView";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {FetchBuild} from "@/sdk/api/lab/build/[id]/fetch";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, Template} from "@leight-core/client";
import {Divider} from "antd";

export default withLabLayout(function Index({build}: IBuildFetch) {
	return <FetchBuild queryParams={{id: build.id}}>
		{build => <LabPage
			title={"lab.build.build"}
			menuSelection={["/lab/build", "/lab/build/[buildId]"]}
			onBack={navigate => navigate("/lab/build")}
			icon={<BuildIcon/>}
			headerProps={{
				footer: <BuildIndexMenu build={build}/>,
			}}
			extra={build.active && <BuildDisableButton build={build}/>}
			breadcrumbProps={<Breadcrumbs>
				<BreadcrumbButton
					href={"/lab"}
					icon={<LabIcon/>}
				/>
				<BreadcrumbButton
					href={"/lab/build"}
					label={"lab.build.label"}
				/>
				<BreadcrumbIcon
					icon={<BuildIcon/>}
					label={<BuildNameInline build={build}/>}
				/>
			</Breadcrumbs>}
		>
			<Template
				title={<AtomizerNameInline atomizer={build.atomizer}/>}
				subTitle={<BuildRatingButton build={build}/>}
				span={22}
				extra={<Divider/>}
			>
				<BuildView
					build={build}
				/>
			</Template>
		</LabPage>}
	</FetchBuild>;
});

export const getServerSideProps = BuildSource().withFetch("build", "buildId");

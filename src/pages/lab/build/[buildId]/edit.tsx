import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {BuildSource} from "@/puff-smith/service/build/BuildSource";
import {IBuildFetch} from "@/puff-smith/service/build/interface";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildEditForm} from "@/puff-smith/site/lab/build/@module/form/BuildEditForm";
import {BuildNameInline} from "@/puff-smith/site/lab/build/@module/inline/BuildNameInline";
import {FetchBuild} from "@/sdk/api/lab/build/[id]/fetch";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, Template} from "@leight-core/client";

export default withLabLayout(function Index({build}: IBuildFetch) {
	return <FetchBuild queryParams={{id: build.id}}>
		{build => <LabPage
			title={"lab.build.edit"}
			menuSelection={["/lab/build", "/lab/build/[buildId]/edit"]}
			onBack={navigate => navigate("/lab/build/[buildId]", {buildId: build.id})}
			icon={<BuildIcon/>}
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
					icon={<BuildIcon/>}
					label={"lab.build.edit.label"}
				/>
			</Breadcrumbs>}
		>
			<Template>
				<BuildEditForm build={build}/>
			</Template>
		</LabPage>}
	</FetchBuild>;
});

export const getServerSideProps = BuildSource().withFetch("build", "buildId");

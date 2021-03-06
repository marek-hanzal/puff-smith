import {CoilIcon} from "@/puff-smith/component/icon/CoilIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {TransComponents} from "@/puff-smith/component/Trans";
import {BuildSource} from "@/puff-smith/service/build/BuildSource";
import {IBuildFetch} from "@/puff-smith/service/build/interface";
import {BrowserLabPage} from "@/puff-smith/site/lab/@module/component/BrowserLabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildNameInline} from "@/puff-smith/site/lab/build/@module/inline/BuildNameInline";
import {BuildIndexMenu} from "@/puff-smith/site/lab/build/@module/menu/BuildIndexMenu";
import {CoilView} from "@/puff-smith/site/shared/coil/@module/view/CoilView";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, Template} from "@leight-core/client";
import {Divider} from "antd";

export default withLabLayout(function Coil({build}: IBuildFetch) {
	return <BrowserLabPage
		title={"lab.build.coil"}
		values={{build}}
		components={TransComponents}
		onBack={navigate => navigate("/lab/build")}
		menuSelection={["/lab/build", "/lab/build/[buildId]/coil"]}
		icon={<CoilIcon/>}
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
				icon={<CoilIcon/>}
				label={"lab.build.coil.title"}
			/>
		</Breadcrumbs>}
		footer={<BuildIndexMenu build={build}/>}
	>
		<Template
			title={build.coil.name}
			span={22}
			extra={<Divider/>}
		>
			<CoilView coil={build.coil}/>
		</Template>
	</BrowserLabPage>;
});

export const getServerSideProps = BuildSource().withFetch("build", "buildId");

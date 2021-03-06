import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {TransComponents} from "@/puff-smith/component/Trans";
import {BuildSource} from "@/puff-smith/service/build/BuildSource";
import {IBuildFetch} from "@/puff-smith/service/build/interface";
import {BrowserLabPage} from "@/puff-smith/site/lab/@module/component/BrowserLabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildNameInline} from "@/puff-smith/site/lab/build/@module/inline/BuildNameInline";
import {BuildIndexMenu} from "@/puff-smith/site/lab/build/@module/menu/BuildIndexMenu";
import {CottonNameInline} from "@/puff-smith/site/shared/cotton/@module/inline/CottonNameInline";
import {CottonView} from "@/puff-smith/site/shared/cotton/@module/view/CottonView";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, Template} from "@leight-core/client";
import {Divider} from "antd";

export default withLabLayout(function Cotton({build}: IBuildFetch) {
	return <BrowserLabPage
		title={"lab.build.cotton"}
		values={{build}}
		components={TransComponents}
		onBack={navigate => navigate("/lab/build")}
		menuSelection={["/lab/build", "/lab/build/[buildId]/cotton"]}
		icon={<CottonIcon/>}
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
				icon={<CottonIcon/>}
				label={"lab.build.cotton.title"}
			/>
		</Breadcrumbs>}
		footer={<BuildIndexMenu build={build}/>}
	>
		<Template
			title={<CottonNameInline cotton={build.cotton}/>}
			span={22}
			extra={<Divider/>}
		>
			<CottonView cotton={build.cotton}/>
		</Template>
	</BrowserLabPage>;
});

export const getServerSideProps = BuildSource().withFetch("build", "buildId");

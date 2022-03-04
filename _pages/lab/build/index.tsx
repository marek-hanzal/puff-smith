import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon} from "@leight-core/common";
import {BuildIcon} from "@/puff-smith";
import {BuildsFilterContext} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {withLabLayout} from "@/puff-smith/../../../_site/lab/@module/layout";
import {LabMenuDrawerButton, LabPage} from "@/puff-smith/../../../_site/lab/@module/component";
import {BuildCreateButton} from "@/puff-smith/../../../_site/lab/build/@module/component/button/BuildCreateButton";
import {BuildFilter} from "@/puff-smith/../../../_site/lab/build/@module/form/BuildFilter";
import {BuildTable} from "@/puff-smith/../../../_site/lab/build/@module/table/BuildTable";
import {BuildCommentDrawerButton} from "@/puff-smith/../../../_site/lab/build/@module/component/button/BuildCommentDrawerButton";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.build"}
		onBack={navigate => navigate('/lab')}
		menuSelection={['/lab/build']}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbIcon
				icon={<BuildIcon/>}
				label={'lab.build.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem("lab.build.button.create", "/lab/build/create", <CreateIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<BuildCommentDrawerButton/>
			<BuildCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		<BuildsFilterContext>
			<BuildFilter/>
			<BuildTable/>
		</BuildsFilterContext>
	</LabPage>;
});
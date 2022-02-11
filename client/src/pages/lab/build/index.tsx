import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon} from "@leight-core/leight";
import {BuildIcon} from "@/puff-smith";
import {BuildCreateButton, BuildFilter, BuildTable} from "@/puff-smith/site/lab/build";
import {BuildsFilterContext} from "@/sdk/puff-smith/api/lab/build/endpoint";

const BuildButtonBar = () => <ButtonBar>
	<BuildCreateButton type={'primary'}/>
</ButtonBar>

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
		extraBrowser={<BuildButtonBar/>}
	>
		<BuildsFilterContext>
			<BuildFilter/>
			<BuildTable/>
		</BuildsFilterContext>
	</LabPage>;
});

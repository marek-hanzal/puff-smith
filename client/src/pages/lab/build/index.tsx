import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon, Template} from "@leight-core/leight";
import {BuildIcon} from "@/puff-smith";
import {Divider} from "antd";
import {BuildCreateButton, BuildListButton, LatestBuildTable} from "@/puff-smith/site/lab/build";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";

const BuildButtonBar = () => <ButtonBar>
	<BuildListButton/>
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
			{CreateMenuItem("lab.build.button.list", "/lab/build/list", <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<BuildButtonBar/>}
	>
		<Template
			span={24}
			mobileExtra={<>
				<BuildButtonBar/>
				<Divider/>
			</>}
		>
			<LatestBuildTable/>
		</Template>
	</LabPage>;
});

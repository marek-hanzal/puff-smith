import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BuildIcon} from "@/puff-smith";
import {BuildCreateButton, BuildPlotButton, BuildPreview} from "@/puff-smith/site/lab/build";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, EditIcon, HomeIcon} from "@leight-core/leight";
import {BarChartOutlined} from "@ant-design/icons";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";

export default withLabLayout(function Index() {
	return <BuildPage
		title={"lab.build.index"}
		collapsed
		menuSelection={['/lab/build']}
		onBack={navigate => navigate('/lab/build')}
		breadcrumbProps={_ => <Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/build'}
				title={'lab.build.label'}
			/>
			<BreadcrumbIcon
				icon={<BuildIcon/>}
				label={'lab.build.index.label'}
			/>
		</Breadcrumbs>}
		extraMobile={({entity}) => entity && <LabMenuDrawerButton>
			{CreateMenuItem("lab.build.button.create", "/lab/build/create", <CreateIcon/>)}
			{CreateMenuItem('lab.build.button.edit', '/lab/build/[buildId]/edit', <EditIcon/>, {buildId: entity.id})}
			{CreateMenuItem('lab.build.button.plot', '/lab/build/[buildId]/plot', <BarChartOutlined/>, {buildId: entity.id})}
		</LabMenuDrawerButton>}
		extraBrowser={({entity}) => entity && <ButtonBar>
			<BuildPlotButton build={entity}/>
			<BuildCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{build => <BuildPreview build={build}/>}
	</BuildPage>;
});

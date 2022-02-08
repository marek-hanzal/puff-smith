import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, BuildIcon, CloneIcon} from "@/puff-smith";
import {BuildCreateButton, BuildListButton, BuildPlotButton, BuildPreview} from "@/puff-smith/site/lab/build";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, EditIcon, HomeIcon, ListIcon} from "@leight-core/leight";
import {Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {BarChartOutlined} from "@ant-design/icons";
import {useSiderCollapseContext} from "@leight-core/leight/dist";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	useSiderCollapseContext().useCollapse(true, true);
	return <BuildPage
		title={"lab.build.index"}
		menuSelection={['/lab/build']}
		onBack={navigate => navigate('/lab/build/list')}
		breadcrumbProps={_ => <Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/build'}
				title={'lab.build.label'}
			/>
			<BreadcrumbButton
				href={'/lab/build/list'}
				title={'lab.build.list.label'}
			/>
			<Space size={'small'}>
				<BuildIcon/>{t('lab.build.index.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={({entity}) => <LabMenuDrawerButton>
			{CreateMenuItem("lab.build.button.create", "/lab/build/create", <CreateIcon/>)}
			{CreateMenuItem("lab.build.button.list", "/lab/build/list", <ListIcon/>)}
			{entity && CreateMenuItem('lab.build.button.edit', '/lab/build/[buildId]/edit', <EditIcon/>, {buildId: entity.id})}
			{entity && CreateMenuItem('lab.build.button.clone', '/lab/build/[buildId]/clone', <CloneIcon/>, {buildId: entity.id})}
			{entity && CreateMenuItem('lab.build.button.plot', '/lab/build/[buildId]/plot', <BarChartOutlined/>, {buildId: entity.id})}
		</LabMenuDrawerButton>}
		extraBrowser={({entity}) => <ButtonBar>
			<BuildListButton/>
			{entity && <BuildPlotButton build={entity}/>}
			<BuildCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{build => <>
			<BuildPreview build={build}/>
			<Divider/>
		</>}
	</BuildPage>;
});

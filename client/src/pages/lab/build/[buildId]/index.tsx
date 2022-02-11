import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BuildIcon} from "@/puff-smith";
import {BuildCreateButton, BuildEditButton, BuildPlotButton, BuildPreview, BuildVapeButton} from "@/puff-smith/site/lab/build";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon} from "@leight-core/leight";
import {BarChartOutlined} from "@ant-design/icons";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";
import {Menu} from "antd";

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
			<Menu.Item>
				<BuildVapeButton
					build={entity}
					onSuccess={({navigate, response}) => {
						navigate('/lab/vape/[vapeId]', {vapeId: response.id});
					}}
				/>
			</Menu.Item>
			{CreateMenuItem("lab.build.button.create", "/lab/build/create", <CreateIcon/>)}
			<Menu.Item>
				<BuildEditButton build={entity}/>
			</Menu.Item>
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

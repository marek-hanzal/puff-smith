import {BuildIcon} from "@/puff-smith";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon} from "@leight-core/common";
import {BarChartOutlined} from "@ant-design/icons";
import {Menu} from "antd";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout";
import {LabMenuDrawerButton} from "@/puff-smith/site/lab/@module/component";
import {BuildVapeButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildVapeButton";
import {BuildEditButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildEditButton";
import {BuildPlotButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildPlotButton";
import {BuildCreateButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildCreateButton";
import {BuildPreview} from "@/puff-smith/site/lab/build/@module/component/BuildPreview";

export default withLabLayout(function Index() {
	return <BuildPage
		title={"lab.build.index"}
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

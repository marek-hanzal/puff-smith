import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {Divider} from "antd";
import {BuildCreateButton, BuildVapeButton} from "@/puff-smith/site/lab/build";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, useParams} from "@leight-core/leight";
import {VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";
import {PlotIcon} from "@/puff-smith";

export default withLabLayout(function Plot() {
	const {buildId} = useParams();
	return <BuildPage
		title={"lab.build.plot"}
		menuSelection={['/lab/build']}
		onBack={navigate => navigate('/lab/build/[buildId]', {buildId})}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/build'}
				title={'lab.build.label'}
			/>
			<BreadcrumbButton
				href={'/lab/build/[buildId]'}
				query={{buildId}}
				title={'lab.build.index.label'}
			/>
			<BreadcrumbIcon
				icon={<PlotIcon/>}
				label={'lab.build.plot.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem("lab.build.button.create", "/lab/build/create", <CreateIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={({entity}) => entity && <ButtonBar>
			<BuildVapeButton build={entity}/>
			<BuildCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{build => <VapesFilterContext defaultFilter={{buildIds: [build.id]}}>
			<VapeFilter disabled={['atomizerIds']}/>
			<VapePlot
				selected={['median', 'count']}
				emptyResultProps={{
					extra: <BuildVapeButton type={'primary'} build={build}/>,
				}}
			/>
			<Divider/>
			<VapeTable defaultFilter={{buildIds: [build.id]}} hidden={['atomizer']}/>
		</VapesFilterContext>}
	</BuildPage>;
});

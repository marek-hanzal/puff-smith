import {Divider} from "antd";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, useParams} from "@leight-core/leight";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {PlotIcon} from "@/puff-smith";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout";
import {LabMenuDrawerButton} from "@/puff-smith/site/lab/@module/component";
import {BuildVapeButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildVapeButton";
import {BuildCreateButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildCreateButton";
import {VapeFilter} from "@/puff-smith/site/lab/vape/@module/form/VapeFilter";
import {VapePlot} from "@/puff-smith/site/lab/vape/@module/plot/VapePlot";
import {VapeTable} from "@/puff-smith/site/lab/vape/@module/table/VapeTable";

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
				selected={['median']}
				emptyResultProps={{
					extra: <BuildVapeButton type={'primary'} build={build}/>,
				}}
			/>
			<Divider/>
			<VapeTable defaultFilter={{buildIds: [build.id]}} hidden={['atomizer']}/>
		</VapesFilterContext>}
	</BuildPage>;
});

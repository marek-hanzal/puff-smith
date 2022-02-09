import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {VapeCreateButton, VapeFilter, VapePlotButton, VapeTable} from "@/puff-smith/site/lab/vape";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon} from "@leight-core/leight";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {PlotIcon} from "@/puff-smith";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";

const VapeButtonBar = () => <ButtonBar>
	<VapePlotButton/>
	<VapeCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function List() {
	return <LabPage
		title={"lab.vape.list"}
		collapsed
		menuSelection={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/vape'}
				title={'lab.vape.label'}
			/>
			<BreadcrumbIcon
				icon={<ListIcon/>}
				label={'lab.vape.list.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.vape.button.create', '/lab/vape/create', <CreateIcon/>)}
			{CreateMenuItem('lab.vape.button.plot', '/lab/vape/plot', <PlotIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<VapeButtonBar/>}
	>
		<VapesFilterContext>
			<VapeFilter/>
			<VapeTable/>
		</VapesFilterContext>
	</LabPage>;
});
